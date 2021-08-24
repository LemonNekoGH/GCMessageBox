var CommandExecute;
(function (CommandExecute) {
    function createOnBtnClickFn() {
        return function (clickToClose, onClick) {
            if (typeof onClick === 'string') {
                CommandPage.startTriggerFragmentEvent(onClick, Game.player.sceneObject, Game.player.sceneObject);
            }
            else {
                onClick.run();
            }
            if (clickToClose) {
                GameUI.dispose(1);
            }
        };
    }
    function setBtnProperties(btn, opt) {
        btn.label = opt.text;
        btn.x = opt.x;
        btn.y = opt.y;
        btn.width = opt.width;
        btn.height = opt.height;
        btn.image1 = opt.normalBg;
        btn.image2 = opt.hoverBg;
        btn.image3 = opt.clickBg;
        btn.grid9img1 = opt.normalGrid;
        btn.grid9img2 = opt.hoverGrid;
        btn.grid9img3 = opt.clickGrid;
        btn.on(EventObject.CLICK, btn, createOnBtnClickFn(), [opt.clickToCloseMessageBox, opt.onClick]);
    }
    function showMessageBox(options) {
        console.log(options);
        var msgBox = GameUI.get(1);
        if (msgBox) {
            return;
        }
        GameUI.show(1);
        msgBox = GameUI.get(1);
        msgBox.x = options.x;
        msgBox.y = options.y;
        msgBox.消息背景.height = options.height;
        msgBox.消息背景.width = options.width;
        msgBox.消息文本.height = options.height;
        msgBox.消息文本.width = options.width;
        msgBox.消息背景.image = options.background;
        msgBox.消息文本.text = options.text;
        var btn = msgBox.确认按钮;
        var opt = options.confirmBtnOpt;
        setBtnProperties(btn, opt);
        btn = msgBox.返回按钮;
        opt = options.cancelBtnOpt;
        if (opt) {
            setBtnProperties(btn, opt);
        }
        else {
            btn.visible = false;
        }
    }
    CommandExecute.showMessageBox = showMessageBox;
    function customCommand_1(commandPage, cmd, trigger, player, playerInput, p) {
        var btnNormalBg = p.确认按钮正常时背景;
        var btnNormalGrid = p.确认按钮正常时背景九宫格;
        var btnHoverBg = p.确认按钮鼠标悬浮时背景;
        var btnHoverGrid = p.确认按钮鼠标悬浮时背景九宫格;
        var btnClickBg = p.确认按钮按下时背景;
        var btnClickGrid = p.确认按钮鼠标按下时背景九宫格;
        var btnHeight = p.确认按钮高度;
        var btnWidth = p.确认按钮宽度;
        var confirmBtnOptions = {
            x: p.确认按钮位置x,
            y: p.确认按钮位置y,
            width: btnWidth,
            height: btnHeight,
            text: p.确认按钮文本,
            normalBg: btnNormalBg,
            normalGrid: btnNormalGrid,
            hoverBg: btnHoverBg,
            hoverGrid: btnHoverGrid,
            clickBg: btnClickBg,
            clickGrid: btnClickGrid,
            onClick: p.当确认时执行,
            clickToCloseMessageBox: p.确认按钮点击后关闭对话框
        };
        var cancelBtnOptions = undefined;
        if (p.对话框类型 === 1) {
            var useSameSize = p.取消按钮与确认按钮使用相同高宽;
            var useSameBgAndGrid = p.取消按钮与确认按钮使用相同的背景和九宫格;
            cancelBtnOptions = {
                x: p.取消按钮位置x,
                y: p.取消按钮位置y,
                width: useSameSize ? btnWidth : p.取消按钮宽度,
                height: useSameSize ? btnHeight : p.取消按钮高度,
                text: p.取消按钮文本,
                normalBg: useSameBgAndGrid ? btnNormalBg : p.取消按钮正常时背景,
                normalGrid: useSameBgAndGrid ? btnNormalGrid : p.取消按钮正常时背景九宫格,
                hoverBg: useSameBgAndGrid ? btnHoverBg : p.取消按钮鼠标悬浮时背景,
                hoverGrid: useSameBgAndGrid ? btnHoverGrid : p.取消按钮鼠标悬浮时背景九宫格,
                clickBg: useSameBgAndGrid ? btnClickBg : p.取消按钮按下时背景,
                clickGrid: useSameBgAndGrid ? btnClickGrid : p.取消按钮鼠标按下时背景九宫格,
                onClick: p.当取消时执行,
                clickToCloseMessageBox: p.取消按钮点击后关闭对话框
            };
        }
        showMessageBox({
            x: p.对话框本体位置x,
            y: p.对话框本体位置y,
            text: p.消息文本,
            width: p.对话框本体宽度,
            height: p.对话框本体高度,
            background: p.对话框本体背景,
            confirmBtnOpt: confirmBtnOptions,
            cancelBtnOpt: cancelBtnOptions
        });
    }
    CommandExecute.customCommand_1 = customCommand_1;
})(CommandExecute || (CommandExecute = {}));
//# sourceMappingURL=MessageBoxCommand.js.map