if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_hcesar());
}
function Keyboard_hcesar()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_hcesar";
  this.KN="HCESAR";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={

  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT | modCodes.CTRL | modCodes.ALT /* 0x0070 */;
  this.s_vogais_10=['','','','','',''];
  this.s_vogais_accento_agudo_11="áéíóúç";
  this.s_vogais_accento_grave_12="àèìòùç";
  this.KVER="16.0.139.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 240
        k.KDC(0,t);
        k.KO(-1,t,"―");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 318
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"|`");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 205
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 301
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 219
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 267
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 308
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"º");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"º");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 242
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 283
        k.KDC(0,t);
        k.KO(-1,t,"º");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 218
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 266
        k.KDC(0,t);
        k.KO(-1,t,"¤");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 307
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 217
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 265
        k.KDC(0,t);
        k.KO(-1,t,"ŭ");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 306
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 243
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 284
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 202
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 252
        k.KDC(0,t);
        k.KO(-1,t,"¹");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 293
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 201
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 251
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 292
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 200
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 250
        k.KDC(0,t);
        k.KO(-1,t,"§");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 291
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 199
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 249
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 290
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 198
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 248
        k.KDC(0,t);
        k.KO(-1,t,"¢");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 289
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 247
        k.KDC(0,t);
        k.KO(-1,t,"¬");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 288
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 246
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 287
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 245
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 286
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 244
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 285
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 213
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 302
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 204
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 241
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 282
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 182
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 184
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 170
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 171
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"Ç");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 185
        k.KDC(0,t);
        k.KO(-1,t,"Ç");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 208
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 253
        k.KDC(0,t);
        k.KO(-1,t,"×");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 296
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 206
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 294
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 207
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 295
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"ª");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"ª");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 203
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 281
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 235
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 276
        k.KDC(0,t);
        k.KO(-1,t,"ə");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 321
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 222
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 270
        k.KDC(0,t);
        k.KO(-1,t,"„");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 311
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 228
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 271
        k.KDC(0,t);
        k.KO(-1,t,"ʒ");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 315
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 274
        k.KDC(0,t);
        k.KO(-1,t,"ð");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 322
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KFCM(1,t,['´'])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"é");
      }
      else if(k.KFCM(1,t,['`'])){
        r=m=1;   // Line 332
        k.KDC(1,t);
        k.KO(-1,t,"è");
      }
      else if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 237
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 278
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 326
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(k.KFCM(1,t,['´'])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"í");
      }
      else if(k.KFCM(1,t,['`'])){
        r=m=1;   // Line 332
        k.KDC(1,t);
        k.KO(-1,t,"ì");
      }
      else if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 273
        k.KDC(0,t);
        k.KO(-1,t,"ı");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 319
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 224
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 258
        k.KDC(0,t);
        k.KO(-1,t,"¨");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 313
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 223
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 264
        k.KDC(0,t);
        k.KO(-1,t,"œ");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 312
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 211
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 256
        k.KDC(0,t);
        k.KO(-1,t,"®");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 299
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(k.KFCM(1,t,['´'])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"ú");
      }
      else if(k.KFCM(1,t,['`'])){
        r=m=1;   // Line 332
        k.KDC(1,t);
        k.KO(-1,t,"ù");
      }
      else if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 216
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 263
        k.KDC(0,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 305
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 215
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 262
        k.KDC(0,t);
        k.KO(-1,t,"µ");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 304
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 214
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 261
        k.KDC(0,t);
        k.KO(-1,t,"ł");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 303
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 220
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 268
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 309
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 221
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 269
        k.KDC(0,t);
        k.KO(-1,t,"„");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 310
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(k.KFCM(1,t,['´'])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"ó");
      }
      else if(k.KFCM(1,t,['`'])){
        r=m=1;   // Line 332
        k.KDC(1,t);
        k.KO(-1,t,"ò");
      }
      else if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 210
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 255
        k.KDC(0,t);
        k.KO(-1,t,"ø");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 298
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 209
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 254
        k.KDC(0,t);
        k.KO(-1,t,"þ");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 297
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 239
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 280
        k.KDC(0,t);
        k.KO(-1,t,"¶");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 328
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 236
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 277
        k.KDC(0,t);
        k.KO(-1,t,"ß");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 325
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 234
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 275
        k.KDC(0,t);
        k.KO(-1,t,"™");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 320
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"´");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 226
        k.KDC(0,t);
        k.KO(-1,t,"´");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 259
        k.KDC(0,t);
        k.KO(-1,t,"°");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 324
        k.KDC(0,t);
        k.KO(-1,t,"´");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(k.KFCM(1,t,['´'])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"á");
      }
      else if(k.KFCM(1,t,['`'])){
        r=m=1;   // Line 332
        k.KDC(1,t);
        k.KO(-1,t,"à");
      }
      else if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 212
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 257
        k.KDC(0,t);
        k.KO(-1,t,"æ");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 300
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 227
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 314
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(k.KFCM(1,t,['´'])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"ç");
      }
      else if(k.KFCM(1,t,['`'])){
        r=m=1;   // Line 332
        k.KDC(1,t);
        k.KO(-1,t,"ç");
      }
      else if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 238
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 279
        k.KDC(0,t);
        k.KO(-1,t,"©");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 327
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"ç");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 229
        k.KDC(0,t);
        k.KO(-1,t,"ç");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 316
        k.KDC(0,t);
        k.KO(-1,t,"ç");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 225
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"•");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 323
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4060 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 272
        k.KDC(0,t);
        k.KO(-1,t,"¥");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 317
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    return r;
  };
}
