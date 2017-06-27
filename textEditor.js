const processData = (input) => {
  input = input.split('\n');
  let s = '';
  let q = +input[0];
  let opId;
  let param;
  let len;
  let result = '';
  let stack = [''];
  
  for ( var i = 1; i <= q; i++ ) {

    opId = +input[i].split(' ')[0];
    if ( opId === 1 ) {
      param = input[i].split(' ')[1];
      len = stack.length;
      s = stack[len - 1] + param;
                 
      
      
      stack.push(s);
    }
    if ( opId === 2 || opId === 3 ) {
      param = +input[i].split(' ')[1]; 
      if ( opId === 2 ) {
        len = stack.length;
        l = s.length;
        s = stack[len - 1].slice(0, l - param );
        stack.push(s);
      }
      if ( opId === 3 ) {
        len = stack.length;
        s = stack[len - 1];
        result += s.charAt(param - 1);    
        
          
      }
    }
    if ( opId === 4 ) {
      if ( stack.length > 1 ) {
        stack.pop();
        len = stack.length;
        s = stack[len - 1];
      }
      
    }
    
      
  }
  return result;  
}; 

var str = '1000\n1 fd\n2 1\n2 1\n4\n3 1\n3 1\n2 1\n1 rnxkzjl\n2 1\n3 6\n2 3\n2 1\n4\n4\n3 4\n4\n1 nl\n2 6\n4\n3 6\n1 om\n4\n2 1\n3 1\n1 hrmu\n3 1\n3 10\n3 9\n4\n3 2\n2 8\n1 bribpuvbto\n4\n4\n3 5\n2 2\n4\n2 3\n4\n4\n2 1\n2 8\n4\n1 hbdhnuo\n3 8\n3 2\n4\n4\n1 leyukmaio\n3 10\n3 7\n2 16\n1 y\n1 tlazmx\n4\n2 1\n3 1\n2 2\n4\n2 1\n3 1\n2 1\n1 arklkn\n4\n1 ytmsyfzh\n4\n4\n4\n2 2\n1 gtec\n2 3\n3 1\n2 1\n4\n1 rnejeuhsu\n2 3\n3 3\n4\n4\n3 1\n2 1\n4\n2 1\n4\n3 1\n1 e\n3 1\n4\n3 1\n1 bat\n4\n4\n4\n4\n3 1\n2 2\n4\n3 1\n2 2\n4\n2 1\n2 1\n4\n1 oirafmhyay\n1 uj\n3 1\n3 9\n2 5\n3 5\n4\n1 pdtpmrtad\n3 6\n2 20\n3 1\n4\n2 20\n1 sskogiybu\n4\n1 fvak\n1 vzsql\n2 2\n3 8\n3 1\n4\n4\n2 1\n4\n3 2\n1 shpipnv\n2 10\n3 2\n1 fk\n4\n2 2\n4\n1 pjyc\n3 7\n1 bbesfkm\n1 vzg\n2 14\n3 2\n4\n3 2\n2 14\n1 klqmnpgiy\n1 sqerrxxy\n3 17\n1 nipttrb\n2 16\n2 7\n2 4\n1 ttprno\n3 2\n3 6\n2 2\n1 itwbqn\n4\n2 4\n4\n4\n4\n4\n1 usraky\n4\n4\n1 mqh\n4\n1 badfpnczdh\n2 9\n3 1\n2 1\n4\n4\n3 5\n4\n4\n2 16\n2 2\n1 b\n1 d\n1 syzpatiu\n3 1\n4\n1 gz\n2 1\n2 7\n1 ne\n1 ww\n2 1\n3 2\n2 2\n4\n1 lie\n4\n1 gflf\n2 10\n1 vllbgrgsue\n1 mjnukb\n3 5\n1 t\n4\n1 xcpo\n2 8\n2 6\n1 doyq\n1 cvnuj\n1 fir\n3 8\n2 7\n1 a\n2 6\n2 8\n4\n3 1\n2 6\n3 1\n1 iaxqn\n2 3\n1 ue\n1 ya\n4\n2 1\n3 1\n3 4\n4\n1 nzczrwgbhh\n1 rye\n1 mx\n4\n4\n3 16\n2 10\n1 kratwjojsy\n2 4\n4\n2 14\n4\n4\n2 5\n2 1\n4\n3 1\n1 bbrwe\n3 5\n3 5\n3 4\n4\n3 1\n2 1\n1 utjfielgvc\n1 hynqv\n1 tpozu\n1 msxn\n3 20\n4\n4\n1 jjhqmcwsg\n2 15\n4\n3 17\n1 izdjdza\n1 wsdimf\n2 36\n3 1\n4\n3 28\n3 9\n1 btexnzaqwd\n3 41\n3 32\n4\n4\n2 4\n1 xjze\n4\n1 jaeywdfh\n4\n4\n1 tpwlyuz\n3 27\n2 29\n1 wx\n3 8\n1 qxq\n3 13\n1 nfw\n4\n1 bnlhnv\n2 12\n2 5\n3 2\n4\n2 6\n3 1\n4\n4\n4\n4\n4\n1 vst\n3 12\n3 2\n1 v\n2 12\n1 dh\n3 3\n4\n4\n2 3\n3 10\n2 8\n1 motexl\n1 htuqtsw\n2 10\n1 vnqylhvn\n1 udej\n4\n1 qeyfjd\n3 17\n4\n1 dyupw\n2 4\n2 7\n2 4\n4\n1 qclztd\n3 2\n4\n1 ybfmgn\n3 9\n1 qituige\n4\n4\n2 2\n3 5\n4\n2 5\n3 1\n1 byllwbpvoh\n3 1\n1 g\n2 2\n3 6\n2 7\n2 2\n1 v\n4\n2 1\n3 1\n3 1\n4\n1 qi\n2 4\n4\n3 1\n3 1\n1 fleex\n2 6\n4\n3 4\n1 planejcxu\n2 11\n4\n2 16\n2 2\n1 qdtyub\n2 1\n4\n2 3\n1 todhnlh\n1 l\n2 8\n3 2\n1 zambckrdz\n2 12\n1 mrgrbou\n2 5\n4\n4\n1 lsfifaf\n3 1\n4\n4\n2 2\n4\n1 lie\n1 tpumi\n2 7\n2 9\n1 qowgtyextz\n3 8\n2 9\n3 5\n1 vplofpslmp\n3 4\n1 tktfcczsk\n4\n1 mpr\n2 9\n1 qboanxd\n2 4\n2 6\n2 5\n2 1\n1 n\n2 1\n4\n1 zgasezuta\n1 ymmxlfouin\n3 3\n3 1\n3 15\n3 14\n2 2\n2 9\n4\n4\n1 chnzrrki\n1 yoaf\n4\n4\n4\n2 8\n3 1\n2 2\n4\n4\n4\n4\n1 gi\n1 nwplmnz\n4\n2 2\n1 myujzhlcbj\n3 1\n2 1\n3 2\n2 9\n4\n1 itivigs\n2 16\n4\n2 14\n4\n3 15\n1 qyjodlvus\n3 18\n2 8\n3 12\n3 4\n3 1\n3 6\n3 9\n3 9\n4\n4\n3 2\n3 12\n3 2\n3 3\n2 9\n1 gdq\n3 2\n4\n2 1\n1 gkgmklt\n2 6\n2 4\n1 bilpkzozp\n2 12\n4\n2 6\n2 3\n2 3\n1 bfba\n4\n4\n4\n2 1\n1 whrjacol\n2 7\n2 6\n1 artbu\n4\n4\n3 6\n4\n4\n4\n2 5\n2 1\n1 avlaw\n1 pbnt\n2 3\n2 1\n4\n2 4\n1 q\n3 2\n1 tausvsb\n3 2\n3 8\n2 2\n3 5\n3 8\n4\n2 6\n3 4\n1 yzhjmpsa\n3 1\n4\n1 ba\n1 jsyaz\n2 1\n1 bv\n2 11\n4\n2 9\n3 1\n1 t\n1 e\n4\n4\n3 2\n1 ixia\n2 2\n2 3\n2 1\n3 1\n3 1\n3 1\n4\n3 1\n3 2\n1 fcaprq\n3 2\n2 2\n4\n3 6\n2 3\n2 2\n1 mjaxj\n1 jrbucfksen\n4\n1 vpopncmbvs\n4\n2 2\n4\n4\n1 bvseiz\n4\n4\n4\n2 5\n1 leafz\n2 3\n3 3\n4\n4\n3 1\n3 3\n1 tljiapqfp\n4\n2 2\n1 qgk\n3 2\n4\n2 1\n1 g\n2 1\n1 xdihmtram\n1 bc\n2 9\n1 u\n4\n3 2\n1 wqqj\n3 3\n1 bpmxmenhb\n2 15\n1 optovwum\n2 6\n4\n4\n1 dnbfwjsh\n3 5\n4\n4\n4\n2 5\n3 1\n2 1\n4\n1 k\n4\n4\n3 3\n4\n3 1\n1 kxgthltn\n1 pzaina\n2 1\n1 v\n4\n2 6\n1 g\n3 9\n2 9\n3 1\n4\n1 rg\n2 8\n2 3\n3 1\n4\n3 2\n2 1\n4\n3 3\n1 utggqgrr\n1 dymvumyiy\n1 rldfsr\n2 1\n3 3\n2 19\n2 1\n3 4\n3 1\n2 2\n1 c\n4\n2 4\n1 zree\n1 sorzpv\n1 d\n2 11\n1 wzjdwhe\n3 5\n3 3\n2 1\n4\n3 3\n4\n1 e\n3 1\n2 1\n4\n2 1\n4\n3 1\n2 1\n4\n3 1\n1 tpg\n1 vfuzvpfro\n2 1\n4\n1 eijjrrdi\n3 10\n3 17\n1 kinsapbk\n4\n4\n4\n4\n4\n4\n2 2\n2 7\n2 1\n4\n4\n3 5\n3 5\n1 d\n1 nxmlgbwqo\n4\n4\n3 1\n3 7\n2 8\n3 1\n3 1\n3 1\n1 kglezd\n4\n3 1\n2 1\n4\n3 1\n2 1\n4\n2 1\n4\n4\n2 4\n1 lxnx\n3 1\n2 7\n2 1\n2 1\n4\n3 1\n2 1\n1 mfnxmatv\n1 ir\n2 9\n1 xbepezcky\n3 6\n2 8\n2 1\n2 1\n1 tpa\n3 1\n4\n1 burepznm\n1 rimky\n4\n3 5\n2 7\n4\n4\n1 xs\n2 1\n1 luv\n3 2\n1 y\n4\n3 3\n3 4\n3 2\n3 1\n3 1\n1 zuxvtqnii\n3 3\n1 yewjet\n1 kaboctb\n4\n3 9\n1 aj\n3 5\n4\n4\n3 6\n3 6\n4\n3 4\n1 dqx\n2 2\n3 4\n2 2\n1 gj\n3 2\n1 ycoiwabxdt\n4\n2 1\n1 bxpfjpcr\n1 fsgx\n3 4\n1 t\n3 14\n4\n2 2\n4\n4\n4\n2 3\n4\n1 gqdahv\n4\n3 1\n4\n1 cd\n1 yrmtmqlpn\n3 2\n2 3\n4\n3 16\n4\n1 tgexih\n4\n1 catvtz\n1 cgzyjnp\n4\n4\n3 6\n4\n2 2\n1 mdmoipqdg\n4\n1 chedqyae\n1 jkekhimq\n1 atq\n4\n3 9\n2 8\n2 5\n2 6\n4\n2 3\n3 2\n1 hhihqo\n2 6\n4\n4\n4\n1 dtnmty\n1 dzzsbbz\n3 13\n2 7\n3 1\n2 11\n1 p\n4\n1 qnimciay\n1 gcpoi\n3 4\n3 12\n2 13\n2 1\n1 ridiroapk\n3 3\n2 8\n1 z\n4\n1 ngr\n4\n1 zjpbqig\n4\n3 1\n4\n4\n4\n3 1\n2 1\n1 qjnmg\n3 1\n3 5\n2 3\n3 1\n4\n1 jkbo\n4\n1 yqmae\n4\n1 k\n3 1\n3 6\n1 sdkqbscw\n4\n4\n1 cvakfzyy\n4\n3 5\n4\n4\n3 1\n2 1\n1 d\n1 yhfqltyea\n2 2\n1 jmunnbcp\n2 12\n2 3\n1 zggnurn\n1 epncppkvig\n1 jfin\n1 jnxnh\n2 5\n2 22\n1 fenf\n4\n1 ejkd\n4\n4\n4\n2 15\n2 5\n2 6\n2 1\n1 tzpkhd\n1 mouf\n4\n3 5\n4\n1 pzf\n4\n1 biffvdepek\n1 izxib\n3 5\n1 letossgswe\n2 12\n1 cdtcbndj\n3 12\n4\n4\n4\n1 a\n1 pwpbrjd\n3 5\n1 pte\n3 2\n2 2\n1 txhfaqmo\n2 6\n1 pzbbgnli\n4\n4\n3 25\n3 25\n4\n4\n3 17\n1 saahe\n4\n1 rmdqcqqkqv\n2 33\n4\n1 qjgkoeo\n3 29\n3 30\n4\n4\n4\n4\n1 wn\n4\n2 3\n4\n4\n3 15\n3 13\n2 12\n1 ozeemaqto\n4\n2 3\n1 uosbjl\n1 mhqiwbkjnw\n3 3\n2 11\n2 4\n4\n4\n2 2\n2 14\n1 sdvi\n4\n4\n2 7\n2 2\n2 2\n3 3\n1 wfuqkqzhm\n3 3\n4\n3 2\n1 vmngovsxo\n4\n3 2\n1 alhng\n2 7\n4\n4\n4\n3 4\n2 3\n4\n4\n2 2\n1 retczit\n1 ywe\n3 1\n4\n2 1\n1 tef\n3 10\n2 11\n4\n2 8\n3 6\n1 eseoi\n3 11\n1 piup\n3 1\n2 3\n1 vbhzhywngy\n1 npxlbsix\n4\n2 10\n4\n1 hmurzop\n3 17\n1 pkcjqtkn\n2 26\n4\n3 31\n3 26\n2 33\n1 o\n1 kybign';
var res = 'f\nf\nj\nk\nj\nr\nr\nr\nh\nn\nz\nn\nn\nl\nl\nr\nr\ng\nn\ng\ng\ng\ng\nr\nr\nr\ny\na\nf\nr\nz\nr\no\no\nc\no\no\nr\nt\no\nr\nl\nr\no\nl\nr\nr\nr\nr\na\nh\nr\nw\nw\nr\nr\nu\nj\nu\nj\nv\nx\nw\nd\ng\nx\nt\nu\nt\nt\nh\nv\nf\nt\nb\nt\nu\nu\nl\nu\nu\nu\nu\ni\nd\nl\ng\nq\nz\ng\nn\nl\nx\nn\nm\ny\ng\ny\ni\nj\nm\nh\nb\nb\ny\ni\ny\nu\ny\nw\nv\nv\nv\na\nv\nt\na\na\nv\na\na\na\na\nv\nv\np\nf\na\nf\nq\nd\nw\nw\nx\nw\nx\nt\nx\nx\nd\nk\nk\nx\nx\nw\nj\nj\ne\ne\ne\np\nj\ns\ns\nz\nr\nz\nz\nz\nz\nz\nz\nz\ne\nt\np\nl\nu\nv\nl\nx\nx\nu\nt\nz\nu\nu\nv\nv\nl\ng\ns\nx\nl\nn\nc\ny\nl\nd\nx\ni\np\nd\nr\nx\nq\ng\nq\nq\nk\ng\nx\nh\nv\nz\nv\ni\nt\nt\np\nd\nq\nb\nx\ns\ns\ns\no\no\nb\nu\nz\nr\ni\nu\nh\nk\nr';
res = res.split('\n').join('');
console.log(processData(str) === res);