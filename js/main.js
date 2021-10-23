var win = nw.Window.get();

var t,
			o = '',
			layouts = [];

		// Change display language, if the definitions are available
		win.showKb = function(layout){
			var kb = $('#multi').getkeyboard();
			kb.options.layout = layout;
			// redraw keyboard with new layout
			kb.redraw();
		};

		$.each(jQuery.keyboard.layouts, function(i, l){
			if (l.name) {
				layouts.push([i,l.name]);
			}
		});
		
        // sort select options by language name, not
		layouts.sort( function( a, b ) {
			return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
		});
		$.each(layouts, function(i, l){
			o += '<option value="' + l[0] + '">' + l[1] + '</option>';
		});

        win.layouts = layouts;

        console.log("layouts: ",layouts);

		$('#multi').keyboard({
			layout: 'qwerty',
			stayOpen: true
		})
		// activate the typing extension
		.addTyping({
			showTyping: true,
			delay: 200
		})
		.previewKeyset();

		

            win.showKb( "en-us" );