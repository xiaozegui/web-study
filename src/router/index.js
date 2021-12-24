import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/h5-study/index.vue'
import h5introduce from '../components/h5-study/h5-introduce.vue'
import h5video from '../components/h5-study/h5-video.vue'
import h5videodom from '../components/h5-study/h5-video-dom.vue'
import h5audio from '../components/h5-study/h5-audio.vue'
import h5drag from '../components/h5-study/h5-drag.vue'
import h5canvas from '../components/h5-study/h5-canvas.vue'
import h5svg from '../components/h5-study/h5-svg.vue'
import h5canvasvssvg from '../components/h5-study/h5-canvas-vs-svg.vue'
import h5location from '../components/h5-study/h5-location.vue'
import h5webstorage from '../components/h5-study/h5-webstorage.vue'
import h5appcache from '../components/h5-study/h5-appcache.vue'
import h5webworker from '../components/h5-study/h5-webworker.vue'
import h5serversentevent from '../components/h5-study/h5-serversentevent.vue'
import h5forminputtypes from '../components/h5-study/h5-form-input-types.vue'
import h5formattributes from '../components/h5-study/h5-formatrributes.vue'
import h5formelement from '../components/h5-study/h5-form-element.vue'
import h5notes from '../components/h5-tag/h5-notes.vue'
import h5event from '../components/h5-study/h5-event.vue'
import h5video_audio from '../components/h5-study/h5-video_audio.vue'
import manual_canvas from '../components/h5-study/manual_canvas.vue'
import manual_color from '../components/h5-study/manual_color.vue'
import manual_dtd from '../components/h5-study/manual_dtd.vue'
import maunualcharactersets from '../components/h5-study/manual_charactersets.vue'
import manual_ascii from '../components/h5-study/manual_ascii.vue'
import manual_iso_8859_1 from '../components/h5-study/manual_iso_8859_1.vue'
import manual_symbols from '../components/h5-study/manual_symbols.vue'
import manual_urlencode from '../components/h5-study/manual_urlencode.vue'
import manual_utf8 from '../components/h5-study/manual_utf8.vue'
import manual_language_code from '../components/h5-study/manual_language_code.vue'
import manual_httpmessage from '../components/h5-study/manual_httpmessage.vue'
import manual_httpmethods from '../components/h5-study/manual_httpmethods.vue'
import h5_accesskey from '../components/h5-attribute/accesskey.vue'
import h5_class from '../components/h5-attribute/class.vue'
import h5_contenteditable from '../components/h5-attribute/contenteditable.vue'
import h5_contentmenu from '../components/h5-attribute/contentmenu.vue'
import h5_data_ from '../components/h5-attribute/data-.vue'
import h5_dir from '../components/h5-attribute/dir.vue'
import h5_draggable from '../components/h5-attribute/draggable.vue'
import h5_dragzone from '../components/h5-attribute/dragzone.vue'
import h5_hidden from '../components/h5-attribute/hidden.vue'
import h5_id from '../components/h5-attribute/id.vue'
import h5_lang from '../components/h5-attribute/lang.vue'
import h5_spellcheck from '../components/h5-attribute/spellcheck.vue'
import h5_style from '../components/h5-attribute/style.vue'
import h5_tabindex from '../components/h5-attribute/tabindex.vue'
import h5_title from '../components/h5-attribute/title.vue'
import h5_translate from '../components/h5-attribute/translate.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import changepassword from '../components/changepassword.vue'
import usercharge from '../components/usercharge.vue'
import chartcharge from '../components/chartcharge.vue'
import h5_doctype from '../components/h5-tag/h5-doctype.vue'
import h5_a from '../components/h5-tag/h5-a.vue'
import h5_abbr from '../components/h5-tag/h5-abbr.vue'
import h5_acronym from '../components/h5-tag/h5-acronym.vue'
import h5_address from '../components/h5-tag/h5-address.vue'
import h5_area from '../components/h5-tag/h5-area.vue'
import h5_article from '../components/h5-tag/h5-article.vue'
import h5_aside from '../components/h5-tag/h5-aside.vue'
import h5_audio from '../components/h5-tag/h5-audio.vue'
import h5_b from '../components/h5-tag/h5-b.vue'
import h5_base from '../components/h5-tag/h5-base.vue'
import h5_basefont from '../components/h5-tag/h5-basefont.vue'
import h5_bdi from '../components/h5-tag/h5-bdi.vue'
import h5_bdo from '../components/h5-tag/h5-bdo.vue'
import h5_big from '../components/h5-tag/h5-big.vue'
import h5_blockquote from '../components/h5-tag/h5-blockquote.vue'
import h5_body from '../components/h5-tag/h5-body.vue'
import h5_br from '../components/h5-tag/h5-br.vue'
import h5_button from '../components/h5-tag/h5-button.vue'
import h5_canvas from '../components/h5-tag/h5-canvas.vue'
import h5_caption from '../components/h5-tag/h5-caption.vue'
import h5_center from '../components/h5-tag/h5-center.vue'
import h5_cite from '../components/h5-tag/h5-cite.vue'
import h5_code from '../components/h5-tag/h5-code.vue'
import h5_col from '../components/h5-tag/h5-col.vue'
import h5_colgroup from '../components/h5-tag/h5-colgroup.vue'
import h5_command from '../components/h5-tag/h5-command.vue'
import h5_datalist from '../components/h5-tag/h5-datalist.vue'
import h5_dd from'../components/h5-tag/h5-dd.vue'
import h5_del from '../components/h5-tag/h5-del.vue'
import h5_details from'../components/h5-tag/h5-details.vue'
import h5_dfn from '../components/h5-tag/h5-dfn.vue'
import h5_dialog from '../components/h5-tag/h5-dialog.vue'
import h5_dir_tag from '../components/h5-tag/h5-dir.vue'
import h5_div from '../components/h5-tag/h5-div.vue'
import h5_dl from '../components/h5-tag/h5-dl.vue'
import h5_dt from '../components/h5-tag/h5-dt.vue'
import h5_em from '../components/h5-tag/h5-em.vue'
import h5_embed from '../components/h5-tag/h5-embed.vue'
import h5_fieldset from '../components/h5-tag/h5-fieldset.vue'
import h5_figcaption from '../components/h5-tag/h5-figcaption.vue'
import h5_figure from '../components/h5-tag/h5-figure.vue'
import h5_font from '../components/h5-tag/h5-font.vue'
import h5_footer from '../components/h5-tag/h5-footer.vue'
import h5_form from '../components/h5-tag/h5-form.vue'
import h5_frame from '../components/h5-tag/h5-frame.vue'
import h1_h6 from '../components/h5-tag/h1-h6.vue'
import h5_head from '../components/h5-tag/h5-head.vue'
import h5_header from '../components/h5-tag/h5-header.vue'
import h5_hr from '../components/h5-tag/h5-hr.vue'
import h5_html from '../components/h5-tag/h5-html.vue'
import h5_i from '../components/h5-tag/h5-i.vue'
import h5_iframe from '../components/h5-tag/h5-iframe.vue'
import h5_img from '../components/h5-tag/h5-img.vue'
import h5_input from '../components/h5-tag/h5-input.vue'
import h5_ins from '../components/h5-tag/h5-ins.vue'
import h5_keygen from '../components/h5-tag/h5-keygen.vue'
import h5_label from '../components/h5-tag/h5-label.vue'
import h5_legend from '../components/h5-tag/h5-legend.vue'
import h5_li from '../components/h5-tag/h5-li.vue'
import h5_link from '../components/h5-tag/h5-link.vue'
import h5_main from '../components/h5-tag/h5-main.vue'
import h5_map from '../components/h5-tag/h5-map.vue'
import h5_mark from '../components/h5-tag/h5-mark.vue'
import h5_menu from '../components/h5-tag/h5-menu.vue'
import h5_menuitem from '../components/h5-tag/h5-menuitem.vue'
import h5_meta from '../components/h5-tag/h5-meta.vue'
import h5_meter from '../components/h5-tag/h5-meter.vue'
import h5_nav from '../components/h5-tag/h5-nav.vue'
import h5_noframes from '../components/h5-tag/h5-noframes.vue'
import h5_noscript from '../components/h5-tag/h5-noscript.vue'
import h5_object from '../components/h5-tag/h5-object.vue'
import h5_ol from '../components/h5-tag/h5-ol.vue'
import h5_optgroup from '../components/h5-tag/h5-optgroup.vue'
import h5_option from '../components/h5-tag/h5-option.vue'
import h5_output from '../components/h5-tag/h5-output.vue'
import h5_p from '../components/h5-tag/h5-p.vue'
import h5_param from '../components/h5-tag/h5-param.vue'
import h5_pre from '../components/h5-tag/h5-pre.vue'
import h5_progress from '../components/h5-tag/h5-progress.vue'
import h5_q from '../components/h5-tag/h5-q.vue'
import h5_rp from '../components/h5-tag/h5-rp.vue'
import h5_rt from '../components/h5-tag/h5-rt.vue'
import h5_ruby from '../components/h5-tag/h5-ruby.vue'
import h5_s from '../components/h5-tag/h5-s.vue'
import h5_samp from '../components/h5-tag/h5-samp.vue'
import h5_script from '../components/h5-tag/h5-script.vue'
import h5_section from '../components/h5-tag/h5-section.vue'
import h5_select from '../components/h5-tag/h5-select.vue'
import h5_small from '../components/h5-tag/h5-small.vue'
import h5_source from '../components/h5-tag/h5-source.vue'
import h5_span from '../components/h5-tag/h5-span.vue'
import h5_strike from '../components/h5-tag/h5-strike.vue'
import h5_strong from '../components/h5-tag/h5-strong.vue'
import h5_style_tag from '../components/h5-tag/h5-style.vue'
import h5_sub from '../components/h5-tag/h5-sub.vue'
import h5_summary from '../components/h5-tag/h5-summary.vue'
import h5_sup from '../components/h5-tag/h5-sup.vue'
import h5_table from '../components/h5-tag/h5-table.vue'
import h5_tbody from '../components/h5-tag/h5-tbody.vue'
import h5_td from '../components/h5-tag/h5-td.vue'
import h5_textarea from '../components/h5-tag/h5-textarea.vue'
import h5_tfoot from '../components/h5-tag/h5-tfoot.vue'
import h5_th from '../components/h5-tag/h5-th.vue'
import h5_thead from '../components/h5-tag/h5-thead.vue'
import h5_time from '../components/h5-tag/h5-time.vue'
import h5_title_tag from '../components/h5-tag/h5-title.vue'
import h5_tr from '../components/h5-tag/h5-tr.vue'
import h5_track from '../components/h5-tag/h5-track.vue'
import h5_tt from '../components/h5-tag/h5-tt.vue'
import h5_u from '../components/h5-tag/h5-u.vue'
import h5_ul from '../components/h5-tag/h5-ul.vue'
import h5_var from '../components/h5-tag/h5-var.vue'
import h5_video_tag from '../components/h5-tag/h5-video.vue'
import h5_wbr from '../components/h5-tag/h5-wbr.vue'
import h5_onafterprint from '../components/h5-event/onafterprint.vue'
import h5_onbeforeprint from '../components/h5-event/onbeforeprint.vue'
import h5_onload from '../components/h5-event/onload.vue'
import h5_onresize from '../components/h5-event/onresize.vue'
import h5_onunload from '../components/h5-event/onunload.vue'
import h5_onblur from '../components/h5-event/onblur.vue'
import h5_onchange from '../components/h5-event/onchange.vue'
import h5_onfocus from '../components/h5-event/onfocus.vue'
import h5_onselect from '../components/h5-event/onselect.vue'
import h5_onsubmit from '../components/h5-event/onsubmit.vue'
import h5_onkeydown	from '../components/h5-event/onkeydown.vue'
import h5_onkeypress from '../components/h5-event/onkeypress.vue'
import h5_onkeyup from '../components/h5-event/onkeyup.vue'
import h5_onclick from '../components/h5-event/onclick.vue'
import h5_ondbclick from '../components/h5-event/ondbclick.vue'
import h5_onmousedown from '../components/h5-event/onmousedown.vue'
import h5_onmousemove from '../components/h5-event/onmousemove.vue'
import h5_onmouseout from '../components/h5-event/onmouseout.vue'
import h5_onmouseover from '../components/h5-event/onmouseover.vue'
import h5_onmouseup from '../components/h5-event/onmouseup.vue'
import h5_autoplay from '../components/h5-attribute/autoplay.vue'
import h5_ontoggle from '../components/h5-event/ontoggle.vue'
import h5_href from '../components/h5-attribute/href.vue'
import h5_height from '../components/h5-attribute/height.vue'
import h5_width from '../components/h5-attribute/width.vue'
import h5_align from '../components/h5-attribute/align.vue'
import h5_color from '../components/h5-attribute/color.vue'
import h5_src from '../components/h5-attribute/src.vue'
import h5_background from '../components/h5-attribute/background.vue'
import h5_alt from '../components/h5-attribute/alt.vue'
import h5_disable from '../components/h5-attribute/disable.vue'
import h5_size from '../components/h5-attribute/size.vue'
import h5_type from '../components/h5-attribute/type.vue'
Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [

	{
		path: '/',
		name: 'h5 index',
		redirect: '/index'
	},
	{
		path: '/index',
		component: index,
		name: 'h5 Study'
	},
	{
		path: '/introduce',
		component: h5introduce,
		name: 'h5 简介'
	},
	{
		path: '/video',
		component: h5video,
		name: 'h5 视频'
	},
	{
		path: '/videodom',
		component: h5videodom,
		name: 'h5 视频+DOM'
	},
	{
		path: '/audio',
		component: h5audio,
		name: 'h5 音频'
	},
	{
		path: '/drag',
		component: h5drag,
		name: 'h5 拖放'
	},
	{
		path: '/canvas',
		component: h5canvas,
		name: 'h5 画布'
	},
	{
		path: '/svg',
		component: h5svg,
		name: 'h5 SVG'
	},
	{
		path: '/canvasvssvg',
		component: h5canvasvssvg,
		name: 'h5 画布 vs SVG'
	},
	{
		path: '/location',
		component: h5location,
		name: 'h5 地理定位'
	},
	{
		path: '/webstorage',
		component: h5webstorage,
		name: 'h5 web存储'
	},
	{
		path: '/appcache',
		component: h5appcache,
		name: 'h5 应用缓存'
	},
	{
		path: '/webworker',
		component: h5webworker,
		name: 'h5 webworker'
	},
	{
		path: '/serversentevent',
		component: h5serversentevent,
		name: 'h5 服务器发送事件'
	},
	{
		path: '/forminputtypes',
		component: h5forminputtypes,
		name: 'h5 输入类型'
	},
	{
		path: '/formelement',
		component: h5formelement,
		name: 'h5 表单元素'
	},
	{
		path: '/formattributes',
		component: h5formattributes,
		name: 'h5 表单属性'
	},
	{
		path: '/tag',
		name: 'h5 标签',
		redirect: '/notes'
	},
	{
		path: '/attribute',
		name: 'h5 属性',
		redirect: '/accesskey'
	},
	{
		path: '/event',
		component: h5event,
		name: 'h5 事件'
	},
	{
		path: '/video_audio',
		component: h5video_audio,
		name: 'h5 视频/音频参考手册'
	},
	{
		path: '/manual_canvas',
		component: manual_canvas,
		name: 'h5 画布 参考手册'
	},
	{
		path: '/manual_dtd',
		component: manual_dtd,
		name: 'h5 文档类型 参考手册'
	},
	{
		path: '/manual_color',
		component: manual_color,
		name: 'h5 颜色 参考手册'
	},
	{
		path: '/manual_charactersets',
		component: maunualcharactersets,
		name: 'h5 字符集 参考手册'
	},
	{
		path: '/manual_ascii',
		component: manual_ascii,
		name: 'h5 ascii 参考手册'
	},
	{
		path: '/manual_iso',
		component: manual_iso_8859_1,
		name: 'h5 ISO-8859-1 参考手册'
	},
	{
		path: '/manual_symbols',
		component: manual_symbols,
		name: 'h5 符号 参考手册'
	},
	{
		path: '/manual_utf8',
		component: manual_utf8,
		name: 'h5 UTF-8 参考手册'
	},
	{
		path: '/manual_urlencode',
		component: manual_urlencode,
		name: 'h5 URL编码 参考手册'
	},
	{
		path: '/manual_languagecode',
		component: manual_language_code,
		name: 'h5 语言代码 参考手册'
	},
	{
		path: '/manual_httpmessage',
		component: manual_httpmessage,
		name: 'h5 消息 参考手册'
	},
	{
		path: '/manual_httpmethods',
		component: manual_httpmethods,
		name: 'h5 方法 参考手册'
	},
	{
		path: '/notes',
		component: h5notes,
		name: '<!-- -->注释'
	},
	{
		path: '/DOCTYPE',
		component: h5_doctype,
		name: '<!DOCTYPE>标签'
	},
	{
		path: '/a',
		component: h5_a,
		name: '<a>标签'
	},
	{
		path: '/abbr',
		component: h5_abbr,
		name: '<abbr>标签'
	},
	{
		path: '/acronym',
		component: h5_acronym,
		name: '<acronym>标签'
	},
	{
		path: '/address',
		component: h5_address,
		name: '<address>标签'
	},
	{
		path: '/area',
		component: h5_area,
		name: '<area>标签'
	},
	{
		path: '/article',
		component: h5_article,
		name: '<article>标签'
	},
	{
		path: '/aside',
		component: h5_aside,
		name: '<aside>标签'
	},
	{
		path: '/audio_tag',
		component: h5_audio,
		name: '<audio>标签'
	},
	{
		path: '/b',
		component: h5_b,
		name: '<b>标签'
	},
	{
		path: '/base',
		component: h5_base,
		name: '<base>标签'
	},
	{
		path: '/basefont',
		component: h5_basefont,
		name: '<basefont>标签'
	},
	{
		path: '/bdi',
		component: h5_bdi,
		name: '<bdi>标签'
	},
	{
		path: '/bdo',
		component: h5_bdo,
		name: '<bdo>标签'
	},
	{
		path: '/big',
		component: h5_big,
		name: '<big>标签'
	},
	{
		path: '/blockquote',
		component: h5_blockquote,
		name: '<blockquote>标签'
	},
	{
		path: '/body',
		component: h5_body,
		name: '<body>标签'
	},
	{
		path: '/br',
		component: h5_br,
		name: '<br />标签'
	},
	{
		path: '/button',
		component: h5_button,
		name: '<button>标签'
	},
	{
		path: '/canvas_tag',
		component: h5_canvas,
		name: '<canvas>标签'
	},
	{
		path: '/caption',
		component: h5_caption,
		name: '<caption>标签'
	},
	{
		path: '/center',
		component: h5_center,
		name: '<center>标签'
	},
	{
		path: '/cite',
		component: h5_cite,
		name: '<cite>标签'
	},
	{
		path: '/code',
		component: h5_code,
		name: '<code>标签'
	},
	{
		path: '/col',
		component: h5_col,
		name: '<col>标签'
	},
	{
		path: '/colgroup',
		component: h5_colgroup,
		name: '<colgroup>标签'
	},
	{
		path: '/command',
		component: h5_command,
		name: '<command>标签'
	},
	{
		path: '/datalist',
		component: h5_datalist,
		name: '<datalist>标签'
	},
	{
		path: '/dd',
		component: h5_dd,
		name: '<dd>标签'
	},
	{
		path: '/del',
		component: h5_del,
		name: '<del>标签'
	},
	{
		path: '/details',
		component: h5_details,
		name: '<details>标签'
	},
	{
		path: '/dfn',
		component: h5_dfn,
		name: '<dfn>标签'
	},
	{
		path: '/dialog',
		component: h5_dialog,
		name: '<dialog>标签'
	},
	{
		path: '/dir_tag',
		component: h5_dir_tag,
		name: '<dir>标签'
	},
	{
		path: '/div',
		component: h5_div,
		name: '<div>标签'
	},
	{
		path: '/dl',
		component: h5_dl,
		name: '<dl>标签'
	},
	{
		path: '/dt',
		component: h5_dt,
		name: '<dt>标签'
	},
	{
		path: '/em',
		component: h5_em,
		name: '<em>标签'
	},
	{
		path: '/embed',
		component: h5_embed,
		name: '<embed>标签'
	},
	{
		path: '/fieldset',
		component: h5_fieldset,
		name: '<fieldset>标签'
	},
	{
		path: '/figcaption',
		component: h5_figcaption,
		name: '<figcaption>标签'
	},
	{
		path: '/figure',
		component: h5_figure,
		name: '<figure>标签'
	},
	{
		path: '/font',
		component: h5_font,
		name: '<font>标签'
	},
	{
		path: '/footer_tag',
		component: h5_footer,
		name: '<footer>标签'
	},
	{
		path: '/form',
		component: h5_form,
		name: '<form>标签'
	},
	{
		path: '/frame',
		component: h5_frame,
		name: '<frame>标签'
	},
	{
		path: '/h1_h6',
		component: h1_h6,
		name: '<h1>到<h6>'
	},
	{
		path: '/head',
		component: h5_head,
		name: '<head>标签'
	},
	{
		path: '/header',
		component: h5_header,
		name: '<header>标签'
	},
	{
		path: '/hr',
		component: h5_hr,
		name: '<hr>标签'
	},
	{
		path: '/html',
		component: h5_html,
		name: '<html>标签'
	},
	{
		path: '/i',
		component: h5_i,
		name: '<i>标签'
	},
	{
		path: '/iframe',
		component: h5_iframe,
		name: '<iframe>标签'
	},
	{
		path: '/img',
		component: h5_img,
		name: '<img>标签'
	},
	{
		path: '/input',
		component: h5_input,
		name: '<input>标签'
	},
	{
		path: '/ins',
		component: h5_ins,
		name: '<ins>标签'
	},
	{
		path: '/keygen',
		component: h5_keygen,
		name: '<keygen>标签'
	},
	{
		path: '/label',
		component: h5_label,
		name: '<label>标签'
	},
	{
		path: '/legend',
		component: h5_legend,
		name: '<legend>标签'
	},
	{
		path: '/li',
		component: h5_li,
		name: '<li>标签'
	},
	{
		path: '/link',
		component: h5_link,
		name: '<link>标签'
	},
	{
		path: '/main',
		component: h5_main,
		name: '<main>标签'
	},
	{
		path: '/map',
		component: h5_map,
		name: '<map>标签'
	},
	{
		path: '/mark',
		component: h5_mark,
		name: '<mark>标签'
	},
	{
		path: '/menu',
		component: h5_menu,
		name: '<menu>标签'
	},
	{
		path: '/menuitem',
		component: h5_menuitem,
		name: '<menuitem>标签'
	},
	{
		path: '/meta',
		component: h5_meta,
		name: '<meta>标签'
	},
	{
		path: '/meter',
		component: h5_meter,
		name: '<meter>标签'
	},
	{
		path: '/nav',
		component: h5_nav,
		name: '<nav>标签'
	},
	{
		path: '/noframes',
		component: h5_noframes,
		name: '<noframes>标签'
	},
	{
		path: '/noscript',
		component: h5_noscript,
		name: '<noscript>标签'
	},
	{
		path: '/object',
		component: h5_object,
		name: '<object>标签'
	},
	{
		path: '/ol',
		component: h5_ol,
		name: '<ol>标签'
	},
	{
		path: '/optgroup',
		component: h5_optgroup,
		name: '<optgroup>标签'
	},
	{
		path: '/option',
		component: h5_option,
		name: '<option>标签'
	},
	{
		path: '/output',
		component: h5_output,
		name: '<output>标签'
	},
	{
		path: '/p',
		component: h5_p,
		name: '<p>标签'
	},
	{
		path: '/param',
		component: h5_param,
		name: '<param>标签'
	},
	{
		path: '/pre',
		component: h5_pre,
		name: '<pre>标签'
	},
	{
		path: '/progress',
		component: h5_progress,
		name: '<progress>标签'
	},
	{
		path: '/q',
		component: h5_q,
		name: '<q>标签'
	},
	{
		path: '/rp',
		component: h5_rp,
		name: '<rp>标签'
	},
	{
		path: '/rt',
		component: h5_rt,
		name: '<rt>标签'
	},
	{
		path: '/ruby',
		component: h5_ruby,
		name: '<ruby>标签'
	},
	{
		path: '/s',
		component: h5_s,
		name: '<s>标签'
	},
	{
		path: '/samp',
		component: h5_samp,
		name: '<samp>标签'
	},
	{
		path: '/script',
		component: h5_script,
		name: '<script>标签'
	},
	{
		path: '/section',
		component: h5_section,
		name: '<section>标签'
	},
	{
		path: '/select',
		component: h5_select,
		name: '<select>标签'
	},
	{
		path: '/small',
		component: h5_small,
		name: '<small>标签'
	},
	{
		path: '/source',
		component: h5_source,
		name: '<source>标签'
	},
	{
		path: '/span',
		component: h5_span,
		name: '<span>标签'
	},
	{
		path: '/strike',
		component: h5_strike,
		name: '<strike>标签'
	},
	{
		path: '/strong',
		component: h5_strong,
		name: '<strong>标签'
	},
	{
		path: '/style_tag',
		component: h5_style_tag,
		name: '<style>标签'
	},
	{
		path: '/sub',
		component: h5_sub,
		name: '<sub>标签'
	},
	{
		path: '/summary',
		component: h5_summary,
		name: '<summary>标签'
	},
	{
		path: '/sup',
		component: h5_sup,
		name: '<sup>标签'
	},
	{
		path: '/table',
		component: h5_table,
		name: '<table>标签'
	},
	{
		path: '/tbody',
		component: h5_tbody,
		name: '<tbody>标签'
	},
	{
		path: '/td',
		component: h5_td,
		name: '<td>标签'
	},
	{
		path: '/textarea',
		component: h5_textarea,
		name: '<textarea>标签'
	},
	{
		path: '/tfoot',
		component: h5_tfoot,
		name: '<tfoot>标签'
	},
	{
		path: '/th',
		component: h5_th,
		name: '<th>标签'
	},
	{
		path: '/thead',
		component: h5_thead,
		name: '<thead>标签'
	},
	{
		path: '/time',
		component: h5_time,
		name: '<time>标签'
	},
	{
		path: '/title_tag',
		component: h5_title_tag,
		name: '<title>标签'
	},
	{
		path: '/tr',
		component: h5_tr,
		name: '<tr>标签'
	},
	{
		path: '/track',
		component: h5_track,
		name: '<track>标签'
	},
	{
		path: '/tt',
		component: h5_tt,
		name: '<tt>标签'
	},
	{
		path: '/u',
		component: h5_u,
		name: '<u>标签'
	},
	{
		path: '/ul',
		component: h5_ul,
		name: '<ul>标签'
	},
	{
		path: '/var',
		component: h5_var,
		name: '<var>标签'
	},
	{
		path: '/video_tag',
		component: h5_video_tag,
		name: '<video>标签'
	},
	{
		path: '/wbr',
		component: h5_wbr,
		name: '<wbr>标签'
	},
	{
		path: '/accesskey',
		component: h5_accesskey,
		name: 'h5 accesskey 属性'
	},
	{
		path: '/class',
		component: h5_class,
		name: 'h5 class 属性'
	},
	{
		path: '/contenteditable',
		component: h5_contenteditable,
		name: 'h5 contenteditable 属性'
	},
	{
		path: '/contentmenu',
		component: h5_contentmenu,
		name: 'h5 contentmenu 属性'
	},
	{
		path: '/data',
		component: h5_data_,
		name: 'h5 data-* 属性'
	},
	{
		path: '/dir',
		component: h5_dir,
		name: 'h5 dir 属性'
	},
	{
		path: '/draggable',
		component: h5_draggable,
		name: 'h5 draggable 属性'
	},
	{
		path: '/dragzone',
		component: h5_dragzone,
		name: 'h5 dragzone 属性'
	},
	{
		path: '/hidden',
		component: h5_hidden,
		name: 'h5 hidden 属性'
	},
	{
		path: '/id',
		component: h5_id,
		name: 'h5 id 属性'
	},
	{
		path: '/lang',
		component: h5_lang,
		name: 'h5 lang 属性'
	},
	{
		path: '/spellcheck',
		component: h5_spellcheck,
		name: 'h5 spellcheck 属性'
	},
	{
		path: '/style',
		component: h5_style,
		name: 'h5 style 属性'
	},
	{
		path: '/tabindex',
		component: h5_tabindex,
		name: 'h5 tabindex 属性'
	},
	{
		path: '/title',
		component: h5_title,
		name: 'h5 title 属性'
	},
	{
		path: '/translate',
		component: h5_translate,
		name: 'h5 translate 属性'
	},
	{
		path: '/autoplay',
		component: h5_autoplay,
		name: 'h5 autoplay 属性'
	},
	{
		path: '/href',
		component: h5_href,
		name: 'h5 href 属性'
	},
	{
		path: '/height',
		component: h5_height,
		name: 'h5 height 属性'
	},
	{
		path: '/width',
		component: h5_width,
		name: 'h5 width 属性'
	},
	{
		path: '/align',
		component: h5_align,
		name: 'h5 align 属性'
	},
	{
		path: '/color',
		component: h5_color,
		name: 'h5 color 属性'
	},
	{
		path: '/src',
		component: h5_src,
		name: 'h5 src 属性'
	},
	{
		path: '/background',
		component: h5_background,
		name: 'h5 background 属性'
	},
	{
		path: '/alt',
		component: h5_alt,
		name: 'h5 alt 属性'
	},
	{
		path: '/disable',
		component: h5_disable,
		name: 'h5 disable 属性'
	},
	{
		path: '/size',
		component: h5_size,
		name: 'h5 size 属性'
	},
	{
		path: '/type',
		component: h5_type,
		name: 'h5 type 属性'
	},
	
	{
		path: '/login',
		component: login,
		name: '登录页'
	},
	{
		path: '/register',
		component: register,
		name: '注册页'
	},
	{
		path: '/changepassword',
		component: changepassword,
		name: '修改密码'
	},
	{
		path: '/usercharge',
		component: usercharge,
		name: '用户管理'
	},
	{
		path: '/chartcharge',
		component: chartcharge,
		name: '评论管理'
	},
	{
		path: '/onafterprint',
		component:h5_onafterprint,
		name: 'onafterprint 事件'
	},
	{
		path: '/onbeforeprint',
		component:h5_onbeforeprint,
		name: 'onbeforeprint 事件'
	},
	{
		path: '/onload',
		component:h5_onload,
		name: 'onload 事件'
	},
	{
		path: '/onresize',
		component:h5_onresize,
		name: 'onresize 事件'
	},
	{
		path: '/onunload',
		component:h5_onunload,
		name: 'onunload 事件'
	},
	{
		path: '/onblur',
		component:h5_onblur,
		name: 'onblur 事件'
	},
	{
		path: '/onchange',
		component:h5_onchange,
		name: 'onchange 事件'
	},
	{
		path: '/onfocus',
		component:h5_onfocus,
		name: 'onfocus 事件'
	},
	{
		path: '/onselect',
		component:h5_onselect,
		name: 'onselect 事件'
	},
	{
		path: '/onsubmit',
		component:h5_onsubmit,
		name: 'onsubmit 事件'
	},
	{
		path: '/onkeydown',
		component:h5_onkeydown,
		name: 'onkeydown 事件'
	},
	{
		path: '/onkeypress',
		component:h5_onkeypress,
		name: 'onkeypress 事件'
	},
	{
		path: '/onkeyup',
		component:h5_onkeyup,
		name: 'onkeyup 事件'
	},
	{
		path: '/onclick',
		component:h5_onclick,
		name: 'onclick 事件'
	},
	{
		path: '/ondbclick',
		component:h5_ondbclick,
		name: 'ondbclick 事件'
	},
	{
		path: '/onmousedown',
		component:h5_onmousedown,
		name: 'onmousedown 事件'
	},
	{
		path: '/onmousemove',
		component:h5_onmousemove,
		name: 'onmousemove 事件'
	},
	{
		path: '/onmouseout',
		component:h5_onmouseout,
		name: 'onmouseout 事件'
	},
	{
		path: '/onmouseover',
		component:h5_onmouseover,
		name: 'onmouseover 事件'
	},
	{
		path: '/onmouseup',
		component:h5_onmouseup,
		name: 'onmouseup 事件'
	},
	{
		path: '/ontoggle',
		component:h5_ontoggle,
		name: 'ontoggle 事件'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
	}
});
export default router;
