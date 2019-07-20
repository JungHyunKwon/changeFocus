/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function($) {
	'use strict';

	/**
	 * @name changeFocus
	 * @since 2019-01-07
	 * @param {function} callback
	 * @return {object}
	 */
	$.fn.changeFocus = function(callback) {
		var $firstThis = this.first(),
			hasTabindex = $firstThis.attr('tabindex');
		
		//tabindex 속성을 가지고 있지 않을 때
		if(!hasTabindex) {
			$firstThis.attr('tabindex', -1);
		}
		
		$firstThis.focus();

		//함수일 때
		if(typeof callback === 'function') {
			callback();
		}
		
		//tabindex 속성을 가지고 있을 때
		if(!hasTabindex) {
			$firstThis.removeAttr('tabindex');
		}

		return this;
	};
})(jQuery);