import React, { useState, useEffect, useCallback } from 'react';
import { Star, Trash2, ShieldAlert, CheckCircle, Loader2 } from 'lucide-react';
import { soundManager } from './SoundManager';
import confetti from 'canvas-confetti';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const ReviewsView: React.FC = () => {
  // Public Form State
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Admin View State
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Admin Reviews List State
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [reviewsError, setReviewsError] = useState('');

  const fetchReviews = useCallback(async () => {
    setIsLoadingReviews(true);
    setReviewsError('');
    try {
      const res = await fetch(`/api/reviews?code=${encodeURIComponent(adminPassword)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setReviews(data.reviews || []);
      } else {
        setReviewsError(data.error || 'Impossible de charger les avis.');
      }
    } catch {
      setReviewsError('Une erreur réseau est survenue.');
    } finally {
      setIsLoadingReviews(false);
    }
  }, [adminPassword]);

  // Auto-fetch reviews if already logged in as admin
  useEffect(() => {
    if (isAdminLoggedIn) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchReviews();
    }
  }, [isAdminLoggedIn, fetchReviews]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setSubmitError('Veuillez remplir tous les champs.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, comment }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        soundManager.playSuccess();
        setSubmitSuccess(true);
        // Trigger nice confetti explosion
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 }
        });
        // Clear form
        setName('');
        setComment('');
        setRating(5);
      } else {
        setSubmitError(data.error || 'Erreur lors de l\'envoi de l\'avis.');
      }
    } catch {
      setSubmitError('Impossible d\'envoyer l\'avis. Vérifiez votre connexion.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminPassword) return;

    setIsLoggingIn(true);
    setLoginError('');
    try {
      const res = await fetch(`/api/reviews?code=${encodeURIComponent(adminPassword)}`);
      const data = await res.json();

      if (res.ok && data.success) {
        soundManager.playSuccess();
        setIsAdminLoggedIn(true);
        setShowAdminModal(false);
        setReviews(data.reviews || []);
      } else {
        soundManager.playFailure();
        setLoginError('Mot de passe administrateur incorrect.');
      }
    } catch {
      setLoginError('Erreur de connexion avec le serveur.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleDeleteReview = async (id: string) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cet avis ?')) return;

    soundManager.playClick();
    try {
      const res = await fetch(`/api/reviews?code=${encodeURIComponent(adminPassword)}&id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setReviews(prev => prev.filter(r => r.id !== id));
      } else {
        alert('Erreur lors de la suppression.');
      }
    } catch {
      alert('Erreur réseau.');
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Introduction Card */}
      <div className="bg-gradient-to-br from-blue-600 to-violet-650 text-white rounded-3xl p-8 shadow-xl shadow-blue-600/10 text-center relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -mr-10 -mb-10" />
        <div className="relative z-10 space-y-3">
          <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center text-xl mx-auto mb-2 shadow-inner">
            💬
          </div>
          <h2 className="text-2xl font-black">Laisse-nous ton Avis !</h2>
          <p className="text-sm text-blue-100 max-w-md mx-auto">
            Ton avis nous intéresse ! Donne ton ressenti sur le site, les cours ou les quiz pour nous aider à l&apos;améliorer. 
            <span className="block mt-1 font-bold text-xs text-yellow-350">🔒 Par sécurité, seul l&apos;administrateur du site verra ton message.</span>
          </p>
        </div>
      </div>

      {/* Main Review Form */}
      {!isAdminLoggedIn && (
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-sm">
          {submitSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-850 dark:text-slate-100">Merci pour ton retour !</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Ton message a bien été envoyé de manière sécurisée et privée.
              </p>
              <button
                onClick={() => { soundManager.playClick(); setSubmitSuccess(false); }}
                className="py-2.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-xs transition-colors duration-150"
              >
                Laisser un autre avis
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="p-4 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 text-red-800 dark:text-red-300 rounded-r text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Pseudo / Nom */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                  Ton prénom ou pseudonyme
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Nathan, Lucas, Sarah..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-850 dark:text-slate-150 placeholder-slate-400 dark:placeholder-slate-550 transition-all duration-150"
                />
              </div>

              {/* Star Rating selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                  Ta note globale sur le site
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = hoverRating !== null ? star <= hoverRating : star <= rating;
                    return (
                      <button
                        type="button"
                        key={star}
                        onClick={() => { soundManager.playClick(); setRating(star); }}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 focus:outline-none transition-transform duration-100 hover:scale-125"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            isFilled
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-200 dark:text-slate-850 fill-transparent'
                          }`}
                        />
                      </button>
                    );
                  })}
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 ml-2">
                    {rating} / 5
                  </span>
                </div>
              </div>

              {/* Comments / Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                  Ton message / commentaire
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Qu'as-tu pensé du site ? Qu'est-ce qui t'a le plus aidé ? Quelles fonctionnalités aimerais-tu voir ?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-850 dark:text-slate-150 placeholder-slate-400 dark:placeholder-slate-550 transition-all duration-150 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <span>Envoyer mon avis</span>
                )}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Admin Panel Link or View */}
      <div className="border-t border-slate-150 dark:border-slate-850 pt-6 text-center">
        {isAdminLoggedIn ? (
          <div className="space-y-6 text-left">
            <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-900 px-6 py-4 rounded-2xl">
              <h3 className="font-extrabold text-sm text-slate-700 dark:text-slate-300">
                🛡️ Console Administrateur (Avis Reçus)
              </h3>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setIsAdminLoggedIn(false);
                  setAdminPassword('');
                }}
                className="py-1.5 px-3 border border-slate-250 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-150"
              >
                Se déconnecter
              </button>
            </div>

            {isLoadingReviews ? (
              <div className="text-center py-12 space-y-3">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto" />
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                  Chargement des avis...
                </span>
              </div>
            ) : reviewsError ? (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 text-red-800 dark:text-red-300 rounded-r text-xs">
                {reviewsError}
              </div>
            ) : reviews.length === 0 ? (
              <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl text-center space-y-2">
                <span className="text-2xl">📭</span>
                <h4 className="font-bold text-sm text-slate-850 dark:text-slate-100">Aucun avis reçu</h4>
                <p className="text-xs text-slate-400">Les avis soumis par les visiteurs apparaîtront ici.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-slate-400 font-bold px-1">
                  <span>Total : {reviews.length} avis reçus</span>
                  <button onClick={fetchReviews} className="text-blue-500 hover:underline">
                    Rafraîchir ↻
                  </button>
                </div>
                
                <div className="grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-1">
                  {reviews.map((rev) => (
                    <div 
                      key={rev.id} 
                      className="bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 p-5 rounded-3xl shadow-sm flex items-start justify-between gap-4 group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-sm text-slate-850 dark:text-slate-100">
                            {rev.name}
                          </span>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star 
                                key={s} 
                                className={`w-3.5 h-3.5 ${
                                  s <= rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-850'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed font-medium bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-850">
                          {rev.comment}
                        </p>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 block">
                          Reçu le {formatDate(rev.createdAt)}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => handleDeleteReview(rev.id)}
                        className="p-2 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-950/20 dark:hover:bg-red-950/40 rounded-xl transition-all duration-150 opacity-0 group-hover:opacity-100 focus:opacity-100 flex-shrink-0"
                        title="Supprimer l'avis"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => { soundManager.playClick(); setShowAdminModal(true); }}
            className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline"
          >
            🔑 Espace Admin (Consulter les avis)
          </button>
        )}
      </div>

      {/* Admin Password Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 shadow-xl max-w-sm w-full space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-sm text-slate-850 dark:text-slate-100">
                🔒 Connexion Espace Admin
              </h3>
              <button 
                onClick={() => { soundManager.playClick(); setShowAdminModal(false); setLoginError(''); }}
                className="text-xs text-slate-400 hover:text-slate-650"
              >
                Fermer
              </button>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              {loginError && (
                <div className="p-3 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 text-red-800 dark:text-red-300 rounded-r text-xs">
                  {loginError}
                </div>
              )}

              <input
                type="password"
                required
                placeholder="Entrez le mot de passe admin..."
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-850 dark:text-slate-150"
              />

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-xs transition-colors duration-150 flex items-center justify-center gap-2"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Vérification...</span>
                  </>
                ) : (
                  <span>Se connecter</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
