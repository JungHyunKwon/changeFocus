/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function($) {
	'use strict';

	/**
	 * @name moveFocus
	 * @since 2019-01-07
	 * @return {jQuery}
	 */
	$.fn.moveFocus = function() {
		return this.each(function(index, element) {
			var $element = $(element),
				hasTabindex = $element.attr('tabindex');

			//속성을 가지고 있지 않을 때
			if(!hasTabindex) {
				$element.attr('tabindex', -1);
			}
			
			$element.focus();
			
			//속성을 가지고 있지 않았었을 때
			if(!hasTabindex) {
				$element.removeAttr('tabindex');
			}
		});
	};
})(jQuery);