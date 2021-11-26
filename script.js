/* JavaScript function to create color toolbar in Dokuwiki */
/* see http://www.dokuwiki.org/plugin:color for more info */

toolbar_icobase = "../../plugins/toolbarbutton/images/";
/* supression des boutons non utilisé*/ 
if (window.toolbar != undefined ) {
   blacklist = ["Color Text"];
   window.toolbar = window.toolbar.filter(function(elem){ return jQuery.inArray(elem.title, blacklist) === -1; });
}

/* Création des boutons pour l"interface d"edition*/
if(window.toolbar != undefined) {


	/* bouton indice */
	toolbar[toolbar.length] = {
		"type"   : "format",
		"title"  : "Indice",
		"icon"   : toolbar_icobase+"lc_subscript.png",
		"open"   : "<sub>",
		"close"  : "</sub>",
		"block"  : false,
	};
	
	/* bouton footnote */
	toolbar[toolbar.length] = {
		"type"   : "format",
		"title"  : "note de bas de page",
		"icon"   : toolbar_icobase+"asterisk.png",
		"sample" : "note de bas de page",
		"open"   : "((",
		"close"  : "))",
		"block"  : false,
	};
	
	/* bouton exposant */
	toolbar[toolbar.length] = {
		"type"   : "format",
		"title"  : "Exposant",
		"icon"   : toolbar_icobase+"lc_superscript.png",
		"open"   : "<sup>",
		"close"  : "</sup>",
		"block"  : false,
	};

	/* boton couleur police */
	toolbar[toolbar.length] = {
		"type"   : "picker",
		"title"	 : "Couleur police",
		"icon"   : toolbar_icobase+"toolbar_icon.png",
		"class"  : "pk_hl",
		"block"  : true,
		"list"   :[{
			"type"   : "format",
			"title"  : "Bleu",
			"icon"   : toolbar_icobase+"picker_blue.png",
			"open"   : "<color blue>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Vert",
			"icon"   : toolbar_icobase+"picker_green.png",
			"open"   : "<color Green>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Rouge",
			"icon"   : toolbar_icobase+"picker_red.png",
			"open"   : "<color red>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"	 : "Gris",
			"icon"   : toolbar_icobase+"picker_light_gray.png",
			"open"   : "<color Gray>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Orange",
			"icon"   : toolbar_icobase+"picker_orange.png",
			"open"   : "<color Orange>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Jaune",
			"icon"   : toolbar_icobase+"picker_yellow.png",
			"open"   : "<color Yellow>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Vert fluo",
			"icon"   : toolbar_icobase+"picker_lime.png",
			"open"   : "<color lime>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Marron",
			"icon"   : toolbar_icobase+"picker_brown.png",
			"open"   : "<color brown>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Violet",
			"icon"   : toolbar_icobase+"picker_purple.png",
			"open"   : "<color Purple>",
			"close"  : "</color>",
		}]
  	};
	
	
	/* bouton couleur surlignage */
	toolbar[toolbar.length] = {
		"type"   : "picker",
		"title"	 : "Couleur surlignage",
		"icon"   : toolbar_icobase+"toolbar_hightlight.png",
		"class"  : "pk_hl",
		"block"  : true,
		"list"   :[{
			"type"   : "format",
			"title"  : "Bleu",
			"icon"   : toolbar_icobase+"picker_blue.png",
			"open"   : "<color white/blue>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Vert",
			"icon"   : toolbar_icobase+"picker_green.png",
			"open"   : "<color white/Green>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Rouge",
			"icon"   : toolbar_icobase+"picker_red.png",
			"open"   : "<color white/red>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"	 : "Gris",
			"icon"   : toolbar_icobase+"picker_light_gray.png",
			"open"   : "<color /Gray>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Orange",
			"icon"   : toolbar_icobase+"picker_orange.png",
			"open"   : "<color /Orange>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Jaune",
			"icon"   : toolbar_icobase+"picker_yellow.png",
			"open"   : "<color /Yellow>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Vert fluo",
			"icon"   : toolbar_icobase+"picker_lime.png",
			"open"   : "<color /lime>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Marron",
			"icon"   : toolbar_icobase+"picker_brown.png",
			"open"   : "<color white/brown>",
			"close"  : "</color>",
		}, {
			"type"   : "format",
			"title"  : "Violet",
			"icon"   : toolbar_icobase+"picker_purple.png",
			"open"   : "<color white/Purple>",
			"close"  : "</color>",
		}]
  	};


	/* new paragraph */
	toolbar[toolbar.length] = {
		"type"   : "format",
		"title"  : "paragraph",
		"icon"   : toolbar_icobase+"paragraph.png",
		"sample" : " ",
		"open"   : "",
		"close"  : "\\\\ \n",
		"block"  : false,
	};



/* bouton inclusion page */
	toolbar[toolbar.length] = {
		"type"   : "format",
		"title"  : "Page inclusion",
		"sample" : "path:to:page",
		"icon"   : toolbar_icobase+"lc_insertctrl.png",
		"open"   : "{{page>" ,
		"close"  : "}}\n",
		"block"  : false,
	};
/* bouton code */
	toolbar[toolbar.length] = {
		"type"   : "format",
		"title"  : "code",
		"icon"   : toolbar_icobase+"sc_sourceview.png",
		"open"   : "<code>\n",
		"close"  : "\n</code>",
		"block"  : false,
	};
/* bouton section collapse */
	toolbar[toolbar.length] = {
		"type"   : "format",
		"title"  : "Collapsible section",
		"icon"   : toolbar_icobase+"lc_outlinecollapse.ico",
		"open"   : "\n--> Title#\n",
		"close"  : "\n\n<--\n",
		"block"  : false,
	};
}


		
