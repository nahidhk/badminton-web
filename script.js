let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // প্রম্পট বাতিল করার জন্য ইভেন্টটিকে প্রতিরোধ করা
    e.preventDefault();
    // প্রম্পট ইভেন্টটি সংরক্ষণ করা
    deferredPrompt = e;

    // একটি বোতাম বা অন্য কোনো ইভেন্টের মাধ্যমে প্রম্পট প্রদর্শন করা
    document.getElementById('installBtn').addEventListener('click', () => {
        // প্রম্পট প্রদর্শন করা
        deferredPrompt.prompt();

        // প্রম্পট ফলাফল হ্যান্ডেল করা
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }

            deferredPrompt = null;
        });
    });
});
