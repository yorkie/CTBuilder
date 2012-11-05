// This file was automatically generated from bubble.soy.
// Please don't edit this file by hand.

if (typeof sp == 'undefined') { var sp = {}; }
if (typeof sp.ui == 'undefined') { sp.ui = {}; }


sp.ui.bubble = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="common_selectWrap"><input type="text" class="common_ipt common_selectIpt" value="', soy.$$escapeHtml(opt_data.value), '" ', (opt_data.isHand == true) ? 'disabled' : '', ' /><div class="common_selectBtn"></div><div class="clear"></div></div>');
  return opt_sb ? '' : output.toString();
};
