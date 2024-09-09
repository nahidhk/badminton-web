let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBtn').addEventListener('click', () => {
        deferredPrompt.prompt();
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

var apigitLink = 'https://github.com/nahidhk/Badminton-app';

function myNavio() {
    const docsLink = `${apigitLink}/blob/main/README.md`;
    const navText = "Badminton";
    const myNav = document.getElementById("nav");
    const navHtml = `
   <header class="nav">
        <nav>
            <span class="navtext">
                ${navText}
            </span>

            <a class="docs" href="${docsLink}">
                Docs
            </a>

        </nav>
    </header>`;
    myNav.innerHTML = navHtml;
}
myNavio();
function myAppDownload() {
    const gitpant = `
 d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
 1.08.58 1.23.82.72 1.21
  1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
  0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82
   1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 
   2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"  
    `
    let mobile = `
                <div class="btn mb"><i class="bi bi-android2"></i> &nbsp;Android</div>
                <div class="btn mb"><i class="bi bi-apple"></i> &nbsp;Apple</div>
                <div class="btn mb"><i class="bi bi-browser-chrome"></i> &nbsp;Web</div>
    `;
    let desktop = `
                <div onclick="apps()" class="btn ds"><i class="bi bi-windows"></i> &nbsp; Windows</div>
                <div class="btn ds"><i class="bi bi-ubuntu"></i> &nbsp;Linux</div>
                <div class="btn ds"><i class="bi bi-apple"></i> &nbsp;Mac</div>
    `;
    const appData = `
       <div class="app bsic">
                <div class="imgbox"><img src="img/logo2.png" alt="Badminton App"></div>
                <div>
                    <h1> &nbsp;&nbsp;Badminton App</h1>
                </div>
                <div onclick="window.location.href='${apigitLink}'" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-github" viewBox="0 0 16 16">
                        <path ${gitpant}/>
                    </svg>
                    &nbsp;&nbsp;324KB
                </div>
            </div>
    `
    const myElement = document.getElementById("apps");
    const elementHtml = `
        <section class="popio">
        <center>
         ${appData}
            <br>
            <div id="installBtn" class="down bsic">
             ${desktop}
             ${mobile}
            </div>
        </center>
    </section>
    `;
    myElement.innerHTML = elementHtml;
}
myAppDownload();