//------------------------------------------------------------------------------------------------------
// 入口
//------------------------------------------------------------------------------------------------------
// 新建全局变量Game，可用自定义子类继承GameBase
var Game = new GameBase();
// 监听引擎初始化
EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, () => {
    GameUI.show(1001);
}, null)
// 监听组件初始化
EventUtils.addEventListenerFunction(UIBase, UIBase.EVENT_COMPONENT_CONSTRUCTOR_INIT, (comp: UIBase) => {
    // 如果点击事件页有事件，就注册事件，并在触发时执行事件页
    if (comp.hasCommand[0]) {
        comp.on(EventObject.CLICK, comp, (cmp: UIBase) => {
            GameCommand.startUICommand(cmp, 0)
        }, [comp])
    }
}, null)