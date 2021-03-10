import { shallowMount,createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import util from '@/util.js'
// const jquery = require('jquery')	
// global.$ = jquery
const localVue = createLocalVue()
localVue.use(util);
const jquery = require('jquery')	
global.$ = jquery
global.dplus_Click =function(){}
describe("App.vue", () => {
  let wrapper;
  let _this,jestfn=jest.fn()
  beforeEach(() => {
    wrapper = shallowMount(App,{localVue,
      mocks:{
        dplus_Click(){

        },
        $http(){
          return new Promise(function(resolve, reject) {
            reject({ status: 200,body:{
              code:0,
              
            } });
          })
        }
      }
    });
    _this = wrapper.vm;
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it('测试App.vue快照', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('测试init', async () => {
    var nev = jest.spyOn(_this, 'init');
    _this.init();
    expect(nev).toHaveBeenCalled();
  });
  it('测试getIsApp',() => {
    var nev = jest.spyOn(_this, 'getIsApp');
    _this.getIsApp();
    expect(nev).toHaveBeenCalled();
    const ua = navigator.userAgent.toLowerCase()
    expect(ua.indexOf('hxappid') > 0).toBeFalsy();
    expect(_this.isApp).toBe(false);
  });
  it('测试setImgSize', () => {
    var nev = jest.spyOn(_this, 'setImgSize');
    _this.setImgSize();
    expect(nev).toHaveBeenCalled();
  });
  it('测试getLogin', () => {
    var nev = jest.spyOn(_this, 'getLogin');
    _this.getLogin();
    expect(nev).toHaveBeenCalled();
    expect(_this.islogin).toBeFalsy();
  });
  it('测试bindRefresh', () => {
    var nev = jest.spyOn(_this, 'bindRefresh');
    _this.bindRefresh();
    expect(nev).toHaveBeenCalled();
  });
  it('测试bindScroll', async () => {
    var nev = jest.spyOn(_this, 'bindScroll');
    var scrollBottom = jest.spyOn(_this, 'scrollBottom');
    _this.bindScroll();
    expect(nev).toHaveBeenCalled();
    expect($(window).scrollTop() > $('body').height()).toBeFalsy();
    expect($('.topbar').hide()).toBeTruthy();
    expect($(window).scrollTop() + $(window).height() >= $('html')[0].scrollHeight - 30).toBeTruthy();
    _this.scrollBottom();
    expect(scrollBottom).toHaveBeenCalled();
    expect(_this.islastpage).toBeFalsy();
  });
  it('测试setTabClick', () => {
    var nev = jest.spyOn(_this, 'setTabClick');
    _this.tabitem=0
    _this.setTabClick(_this.tabitem);
    expect(nev).toHaveBeenCalled();
  });
});
