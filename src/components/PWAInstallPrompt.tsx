import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, Share, PlusSquare, X, CheckCircle2, Copy, Check, MessageCircle } from 'lucide-react';

export const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [hasDismissedBanner, setHasDismissedBanner] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const appUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`മലയാളത്തിൽ നിന്ന് ഇംഗ്ലീഷ് എളുപ്പത്തിൽ പഠിക്കാം! ഈ ആപ്പ് ലിങ്ക് തുറക്കൂ: ${appUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // If already installed, hide
  if (isInstalled) return null;

  return (
    <>
      {/* Top Banner on Mobile / Desktop */}
      {!hasDismissedBanner && (
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white px-4 py-2 text-xs shadow-md border-b border-emerald-700/50">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                <Smartphone className="w-4 h-4 text-emerald-300" />
              </div>
              <p className="truncate">
                <span className="font-extrabold text-emerald-300">നിങ്ങളുടെ ഫോണിൽ ആപ്പ് ആയി ഉപയോഗിക്കാം!</span>{' '}
                <span className="hidden sm:inline text-slate-200">
                  ഹോം സ്ക്രീനിലേക്ക് ചേർത്ത് ഇന്റർനെറ്റ് ഇല്ലാതെയും പഠിക്കാം.
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {isInstallable ? (
                <button
                  onClick={install}
                  className="px-3 py-1 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_2px_0_#059669] active:translate-y-0.5 active:shadow-none"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ഇൻസ്റ്റാൾ ചെയ്യുക</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_2px_0_#047857] active:translate-y-0.5 active:shadow-none"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>ഫോണിൽ ആപ്പ് ആക്കാൻ</span>
                </button>
              )}

              <button
                onClick={() => setHasDismissedBanner(true)}
                className="p-1 text-emerald-300/70 hover:text-white transition-colors cursor-pointer"
                title="അടയ്ക്കുക"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructional Modal on how to install */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 text-left relative overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-xs">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  ഫോണിൽ ആപ്പ് ആയി ഉപയോഗിക്കാൻ 2 വഴികൾ:
                </h3>
                <p className="text-xs text-slate-500">
                  പ്ലേസ്റ്റോർ ഇല്ലാതെ നേരിട്ട് ഫോണിന്റെ ഹോം സ്ക്രീനിൽ വെക്കാം
                </p>
              </div>
            </div>

            {/* Quick Share to Phone Section */}
            <div className="mb-5 p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
              <div className="text-xs font-bold text-emerald-950 mb-2">
                1. കമ്പ്യൂട്ടറിലാണെങ്കിൽ ലിങ്ക് ഫോണിലേക്ക് അയക്കൂ:
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 px-3 py-2 bg-white hover:bg-slate-50 border border-emerald-300 rounded-xl text-xs font-bold text-slate-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                  <span>{copied ? 'ലിങ്ക് കോപ്പി ചെയ്തു!' : 'ലിങ്ക് കോപ്പി ചെയ്യുക'}</span>
                </button>

                <button
                  onClick={handleShareWhatsApp}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  title="വാട്സാപ്പിൽ അയക്കാൻ"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="font-bold text-slate-900 text-xs mb-1">
                2. ഫോണിൽ തുറന്ന ശേഷം ഇങ്ങനെ ഇൻസ്റ്റാൾ ചെയ്യാം:
              </div>

              {isIOS ? (
                /* iOS Safari instructions */
                <>
                  <div className="flex items-start gap-2.5">
                    <Share className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">1. Safari ബ്രൗസറിൽ</strong> താഴെയുള്ള <strong>'Share'</strong> ബട്ടൺ (മുകളിലേക്ക് അമ്പടയാളമുള്ള ചതുരം) തൊടുക.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <PlusSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">2. 'Add to Home Screen'</strong> (ഹോം സ്ക്രീനിലേക്ക് ചേർക്കുക) തിരഞ്ഞെടുക്കുക.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">3. 'Add' അമർത്തുക.</strong> ഇനി മുതൽ ഫോണിലെ ആപ്പുകൾക്കൊപ്പം ഇത് കാണാം!
                    </div>
                  </div>
                </>
              ) : (
                /* Android / Chrome instructions */
                <>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-emerald-700">1.</span>
                    <div>
                      ഫോണിലെ ക്രോം ബ്രൗസറിൽ ഈ ലിങ്ക് തുറന്ന് മുകളിലെ <strong className="text-slate-900">മൂന്ന് കുത്തുകൾ (Menu ⋮)</strong> തൊടുക.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-emerald-700">2.</span>
                    <div>
                      ലിസ്റ്റിൽ നിന്നും <strong className="text-slate-900">'Install app'</strong> അല്ലെങ്കിൽ <strong className="text-slate-900">'Add to Home Screen'</strong> തിരഞ്ഞെടുക്കുക.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      'Install' ക്ലിക്ക് ചെയ്താൽ വാട്സാപ്പോ ഫേസ്ബുക്കോ പോലെ ഫോണിന്റെ ഹോം സ്ക്രീനിൽ ഐക്കൺ വരും!
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer transition-colors"
              >
                മനസ്സിലായി (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

