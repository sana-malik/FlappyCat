(function (Ω) {

	"use strict";

	var JumpDialog = Ω.Dialog.extend({
		time: 0,

		init: function (key, cb) {

			if (typeof key === "function") {
				cb = key;
				key = null;
			}

			if (key) {
				this.killKey = key;
			}
			this.cb = cb;

		},

		tick: function (delta) {

			this.time += delta;

			if (this.killKey && Ω.input.pressed(this.killKey)) {
				Ω.input.release(this.killKey);
				this.done();
			}

		},

		done: function () {

			window.game.clearDialog();
			this.cb && this.cb();

		},

		render: function (gfx) {

			var c = gfx.ctx;

			c.fillStyle = "rgba(0, 0, 0, 0.7)";
			c.fillRect(0, 0, gfx.w, gfx.h);

		}

	});

	window.JumpDialog = JumpDialog;

}(window.Ω));
