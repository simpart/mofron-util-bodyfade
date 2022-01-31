const Fade = require("mofron-effect-fade");

mofron.document.style({ 'opacity': 0 });
mofron.document.effect([
    new Fade({ value: true, speed: 1500, eid: 0, tag: "in" }),
    new Fade({ value:false, speed: 1500, eid: 1, tag: "out" })
]);

module.exports = {
    fadein: () => {
        try {
            setTimeout(() => {
                mofron.document.execEffect(0);
            },100);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    },
    
    fadeout: () => {
        try {
            mofron.document.execEffect(1);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    },

    speed: (fin, fout) => {
        try {
            let fade_in = mofron.document.effect({ modname: "Fade", tag: "in" });
	    fade_in.speed(fin);
            let fade_out = mofron.document.effect({ modname: "Fade", tag: "out" });
	    fade_out.speed(
                (undefined !== fout) ? fout : fin
	    );
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
};
