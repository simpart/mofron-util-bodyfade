const Fade = require("mofron-effect-fade");

mofron.document.style({ 'opacity': 0 });
if (null === mofron.document.effect({ tag:'BodyFade', modname:'Fade' })) {
    mofron.document.effect([
        new Fade({ tag:'BodyFade', value:true,  speed:1000, eid:0, tag:"in" }),
        new Fade({ tag:'BodyFade', value:false, speed:1000, eid:1, tag:"out" })
    ]);
}

module.exports = {
    fadein: (fn) => {
        try {
            setTimeout(() => {
                mofron.document.execEffect(0,fn);
            },100);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    },
    
    fadeout: (fn) => {
        try {
            mofron.document.execEffect(1,fn);
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
