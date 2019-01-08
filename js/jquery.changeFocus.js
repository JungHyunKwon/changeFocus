/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	'use strict';

	(function($) {
		//제이쿼리가 함수일 때
		if(typeof $ === 'function') {
			/**
			 * @name changeFocus
			 * @since 2019-01-07
			 * @param {function} callback
			 * @return {jQuery}
			 */
			$.fn.changeFocus = function(callback) {
				var $thisFirst = this.first(),
					hasTabindex = $thisFirst.attr('tabindex');
				
				//tabindex 속성을 가지고 있지 않을 때
				if(!hasTabindex) {
					$thisFirst.attr('tabindex', -1);
				}
				
				$thisFirst.focus();

				//beforeChange 매개변수가 함수일 때
				if(typeof callback === 'function') {
					callback();
				}

				if(!hasTabindex) {
					$thisFirst.removeAttr('tabindex');
				}

				return this;
			};
		}else{
			throw '제이쿼리가 없습니다.';
		}
	})(window.jQuery);
}catch(error) {
	console.error(error);
}