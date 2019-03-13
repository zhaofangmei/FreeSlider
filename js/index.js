(function (window, document) {
    //创建一个构造函数
	function FreeSlider (selector, speed) {
		//变量改为属性
		this.oContainer = document.querySelector(selector)
		this.oWrapper = this.oContainer.querySelector('ul')
		this.oSlide = this.oWrapper.querySelectorAll('li')

		//当传入轮播速度时，速度默认为100
		this.speed = speed || 100

		this.containerW = this.oContainer.offsetWidth
		this.wrapperW = this.oSlide[0].offsetWidth * this.oSlide.length
		this.x = 0
		this.timer = null
		
		this.init()
	}

	//构造函数的原型对象
	FreeSlider.prototype = {
		constructor: FreeSlider,

		//功能抽离，此处实现初始化
		init: function () {
			this.oWrapper.style.width = this.wrapperW * 2 + 'px'
			this.oWrapper.innerHTML += this.oWrapper.innerHTML

			if (this.wrapperW < this.containerW) {
				this.oContainer.style.width = this.wrapperW + 'px'
			}

			this.slideMove()
		},

		//图片自动无限轮播
		slideMove: function () {
			var that = this
			this.timer = setInterval( function () {
				that.x++
				if (that.x > that.wrapperW) {
					that.x = 0
				}
				that.oWrapper.style.transform = 'translate('+ (-that.x) +'px)'
			}, this.containerW / this.speed)
		},

		// 图片停止轮播
		stopSlideMove: function () {
			clearInterval(this.timer)
		}
    }

    //将构造函数暴露给window对象
    window.FreeSlider = FreeSlider
})(window, document)