function fadeInPage() {
    if (!window.AnimationEvent) {
        return;
    }
    var voile = document.getElementById('voile');
    voile.classList.add('fadeOut');
}

document.addEventListener('DOMContentLoaded', function () {
    if (!window.AnimationEvent) {
        return
    }

    document.addEventListener('click', function (event) {
        console.log(event.target.tagName);
        if (event.target && event.target.tagName == 'A') {
            if (!event.target.hostname !== window.location.hostname) {
                var voile = document.getElementById('voile'),
                    anchor = event.target;

                var listener = function () {
                    window.location = anchor.href;
                    voile.removeEventListener('animationend', listener);
                };

                voile.addEventListener('animationend', listener);

                event.preventDefault();
                voile.classList.add('fadeIn');
            }
        }
    });
});


window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
        return;
    }
    var voile = document.getElementById('voile');
    voile.classList.remove('fadeIn');
});