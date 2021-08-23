var Game = new GameBase();
EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, function () {
    GameUI.show(1001);
}, null);
EventUtils.addEventListenerFunction(UIBase, UIBase.EVENT_COMPONENT_CONSTRUCTOR_INIT, function (comp) {
    if (comp.hasCommand[0]) {
        comp.on(EventObject.CLICK, comp, function (cmp) {
            GameCommand.startUICommand(cmp, 0);
        }, [comp]);
    }
}, null);
//# sourceMappingURL=GCMain.js.map