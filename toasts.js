let _timer, _toasts = [];




function showToast(message) {
    if (document.getElementById('c3-toast')) {
        _toasts.push(message);
        return;
    }
    const c3Toast = document.createElement('DIV');
    c3Toast.className = 'c3-toast';
    c3Toast.id = 'c3-toast';
    const notificationActionRenderer = document.createElement('DIV');
    notificationActionRenderer.className = 'notification-action-renderer';
    c3Toast.appendChild(notificationActionRenderer);
    const notificationActionResponseText = document.createElement('DIV');
    notificationActionResponseText.className = 'notification-action-response-text';
    notificationActionResponseText.textContent = message || '提取码已成功复制到剪切板';
    notificationActionRenderer.appendChild(notificationActionResponseText);
    document.body.appendChild(c3Toast);
    window.requestAnimationFrame(() => {
        c3Toast.dir = 'in';
    });
    if (_timer) {
        clearTimeout(_timer);
    }
    _timer = setTimeout(() => {
        c3Toast.dir = 'out';
        setTimeout(() => {
            c3Toast.remove();
            if (_toasts.length)
                showToast(_toasts.pop())
        }, 195);
    }, 3000);
}