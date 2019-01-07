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
			 * @name moveFocus
			 * @since 2019-01-07
			 * @return {jQuery}
			 */
			$.fn.moveFocus = function() {
				var $thisFirst = this.first(),
					hasTabindex = $thisFirst.attr('tabindex');
				
				if(!hasTabindex) {
					$thisFirst.attr('tabindex', -1);
				}
				
				$thisFirst.focus();

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