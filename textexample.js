_gd_is(new hl.Program())
const f = _gd_efieldsg()
f.fvm("name", "change-text")
f.fvm("auto", "by", "qaiik")
f.fvm("auto", "made", "11/9/22")
f.push(_global_objsetter)
_gd_ddisplay()


class ke extends HL_KeyboardEvent {
    constructor() {
        super()
    }

    init(){}
    down(){}
    up(k) {
        if (k.code == "KeyF") {
            let q = Load_HLblib("query").query;
            let text = prompt("What it is now")
            let aftertext = prompt("What to change it to")
            const element = q.by({
                innerText: text
            }).at(-1)

            const hh = new ElementModifiers(element);
            hh.text(aftertext)
        }
    }
}

_registerEvent(ke)
