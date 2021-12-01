const { maximumScore } = require('./index')

describe('Longest substring tests', () => {
    it('General cases 1', () => {
        expect(maximumScore([-344,568,12,-254,-38,-946,78,-219,-814,-574,-884,-65,304,990,-769,-742,-686,-141,67,-540,-52,508,-480,586,-503,739,154,-652,798,-345,-320,240,-195,-321,-242,-934,-71,-58,-336,375,-871,-169,-71,188,-760,595,689,-391,998,-508,-481,-785,-215,-958,395,-697,-660,991,172,439,-199,-732,-36,493,958,-493,660,619,621,-727,732,-239,943,-463,-779,-171,-538,-298,-817,-790,297,669,848,-435,931,-495,-30,-930,552,278,-817,-797,-126,-186,-407,-246,654,732,913,-770,-1000,-582,-447,244,694,-248,932,248,-384,877,193,-351,796,726,-141,859,-119,407,250,288,-497,-827,275,-21,-823,-673,-200,-348,900,-706,608,-721,575,881,501,-53,919,-346,-2,-965,-272,40,658,-638,-410,-795,600,-801,102,427,-861,-434,765,-902,372,697,-290,516,-125,461,856,-269,936,411,-584,-99,388,-408,325,755,599,347,229,-593,-239,645,121,-491,830,16,-263,382,590,-492,988,434,-134,461,941,523,-927,46,575,67,-122,113,-739,-888,799,473,-888,-17,33,-602,733,290,273,-595,453,-883,416,-735,-606,436,-426,643,-698,-111,489,61,390,383,315,-736,-462,987,-123,211,511,579,-230,-389,151,437,904,45,-725,226,827,197,515,41,29,196,-958,-296,-469,-251,24,690,-912,-207,131,-546,149,-708,-545,246,505,-65,586,312,717,435,-532,564,-752,866,-292,-888,566,-459,-453,-257,617,526,-511,388,-620,321,11,64,887,198,-642,-846,637,52,81,31,-887,569,-534,-186,261,219,27,149,299,731,-757,886,-484,-814,-981,254,719,-648,-369,686,-254,-954,690,832,-127,720,-122,547,14,336,340,816,988,-203,521,-115,841,-168,799,-582,-461,-961,-459,-521,116,-299,270,689,402,-721,959,-353,36,-896,-257,815,11,162,228,983,334,38,-476,120,-399,189,462,-342,-445,824,432,-128,-814,714,488,-860,700,412,295,-769,-331,-645,370,-118,-229,-731,-118,-836,-844,-818,821,-669,-989,-962,-777,-279,-195,-726,-202,-448,618,210,904,-971,-16,-920,-179,462,565,-74,329,-295,-212,-567,-906,567,-288,-52,100,-87,-258,268,-707,540,-681,-88,-611,467,759,-810,-204,987,569,-154,-24,-626,-8,-784,-134,-428,78,-404,997,-979,-561,-202,216,229,139,142,-948,433,-695,384,849,864,-247,-310,97,-545,568,388,456,-643,420,645,69,291,398,707,-910,184,-844,-108,-714,-377,-819,344,-260,-114,-920,993,394,921,810,-939,-741,578,-682,348,138,-905,459,-706,-833,-844,-313,-515,512,40,41,-622,165,-679,336,669,466,634,-343,-171,942,417,-191,-880,228,948,-197,210,-789,-766,-68,112,862,171,-28,52,-177,278,363,-40,221,-310,4,989,-301,719,-614,713,179,-667,737,328,-961,830,97,-151,817,-381,158,-260,-214,456,139,-865,90,149,-700,-807,315,627,209,594,448,39,-602,-14,522,632,-330,-457,421,-149,-33,-419,873,266,575,-931,479,789,-857,-534,-511,-373,85,-865,-138,-336,-705,212,313,916,-867,335,598,314,636,-582,684,319,799,524,595,-585,-995,494,383,357,401,783,954,-39,-3,636,885,126,376,-47,-21,188,-936,-496,487,-501,-509,688,772,44,-199,-148,659,-220,799,47,-215,-499,104,327,624,968,-979,-410,-565,942,-627,104,383,-826,-717,-579,855,-469,358,968,-202,-716,-566,63,661,496,-45,-947,787,-17,810,-326,180,-468,141,455,234,555,-132,221,448,-769,-303,-838,-45,-608,677,379,22,610,689,-813,-410,-925,66,911,-323,209,-129,-568,753,21,-197,-21,256,-623,-584,221,19,-227,-679,114,122,430,-348,-794,781,-122,491,-944,63,678,-956,-183,748,368,635,548,-104,352,27,-279,-280,631,-84,572,737,674,-528,-54,-435,-281,981,-368,385,965,263,659,376,-907,-636,-460,-386,154,823,345,-754,-383,-689,-580,-319,-982,-11,713,-814,59,-367,-10,682,897,-76,-795,-834,141,-199,556,-908,-438,126,-806,752,642,-870,906,872,483,-550,-737,787,-142,-90,854,-480,-208,865,-289,153,493,-985,-501,-750,-334,-921,790,-129,323,-354,-353,-981,-645,864,624,898,-746,169,643,856,838,976,95,74,-947,761,912,440,-673,-217,144,-618,-30,-14,-50,522,-890,478,594,-31,-672,492,618,-857,922,414,997,314,187,-146,-371,32,931,380,-164,-695,142,690,-128,597,-557,-70,579,-940,-149,-585,-899,655,-639,252,402,-110,144,551,820,-767,497,918,621,-25,1,891,-926,112,602,-256,14,655,-913,210,992,164,286,331,193,-234,22,-983,910,348,180,-341,-311,977,474,-109,162,144,-229,475,516,388,-56,723,20,755,245,934,-520,-398,-519,508,797,323,834,-262,604,457,395,-728,231,-885,290,-623,-721,-997,-406,187,-602,512,764,-432,402,-299,145,84,343,161,-498,-937,-960,-480,-372,-512,-496,411,-766,995,452,-291,803,346,-763,-217,-98,-69,200,-988,113,469,23,-4,572,-761,315,453,43,-30,922,204,-4,-319,871,931,-84,685,803,644,-567,770,717,890,-956,-818,315,-461,132,288,-877,-14,447,306,-855,378,642,535,540,766,453,-686,-874,292,-909,-821,86,-191,166,667,-89,148,975,-952,-803,-816,76,-234,893,-548,-70,-826,-809,-703,33,238,-776,438,441,-275,417,161,296,345,-753,-173,-458,-843,-395,924,840,817,-605,660,-440,-729,-931,-162,-285,423,279,485,-920,186,-918,-379,-609,840,-75,707,-386,85,949,600,768,-995,-953,955,368,-309,-585,302,-178,-376,128,-385,-564,745,540,683,-526,-932,-806,-148,-566,-873,-437,-292,737,940,491,530,-788,-991,669,876,-51,-137,-423,-39,-485,-896,427,498,-229,-822,305,907,597,903,794,239,704,-138,159,481,816,-589,-926,-819,-389,-469,-239,428,-748,-270,61,377,-324,850,268,325,814,764,-270,-41,522,-825,-517,582,-531,27,651,21,-331,-243,650,509,133,855,-155,-607,-385,-782,973,677,795,9,338,414,-928,-858,-14,962,416,739,830,454,877,-163,-974,957,-503,308,-186,276,851,470,729,384,866,2,-770,-730,-830,799,558,-809,-21,34,-23,796,-806,801,346,-165,500,-323,-490,-185,670,-114,511,-23,-625,421,127,-737,445,635,-819,388,562,-244,-162,-640,458,-897,-828,-574,4,-924,-690,661,-187,-957,-486,393,-361,163,-640,-50,607,-135,741,-987,582,-113,823,821,-413,62,298,-8,-135,519,545,152,580,-958,769,-488,421,-510,-975,392,-648,-839,65,-918,616,-848,-491,466,616,-261,-445,607,267,-364,512,-847,891,-884,89,-161,834,671,-452,522,753,-88,-855,-429,-740,-369,79,453,-268,-319,531,-420,-254,-839,139,-843,657,-195,580,-966,815,-168,700,22,816,-155,-228,-462,303,360,-868,403,110,385,384,293,33,109,-426,891,530,752,-100,-742,19,20,267,-780,-964,-539,934,921,868,-981,-722,-231,-883,19,-405,212,167,261,-510,-198,41,-918,-410,-976,-630,378,-603,305,-230,239,-963,643,-474,-98,-716,230,305,-301,-382,435,252,-998,233,-212,923,-218,-468,887,800,-681,769,432,517,-303,539,594,-108,76,952,-50,-213,-347,-849,-962,970,749,474,434,-540,540,-920,663,4,687,-899,182,409,-989,-135,976,-736,34,130,-328,-850,645,-774,431,816,5,-9,-218,-231,-255,-391,-797,-528,730,103,865,-807,-847,-391,241,-838,-848,142,-202,-433,-20,136,718,157,648,-635,78,656,522,704,362,117,808,116,-102,734,-269,807,-627,-8,850,154,174,540,664,674,-647,485,89,-641,-506,553,-915,464,-481,495,915,-45,984,-364,-606,-640,-772,-755,-28,-590,-552,705,-488,-963,644,-581,-8,264,433,-667,-22,879,-180,-593,260,721,-81,-308,-741,207,86,-878,-622,-545,-403,-725,-950,-126,-14,-12,-245,467,-618,-486,-21,726,640,-159,-200,-793,170,-689,471,-307,-804,-188,-709,937,-520,69,-686,-541,-230,-115,-417,-589,896,185,184,421,783,-645,769,40,-577,-462,757,-881,504,-169,313,65,-658,676,-434,-415,643,-503,-303,-934,424,-17,-203,-140,-192,-71,293,-954,159,-98,-543,-709,339,61,-711,390,-633,-473,616,525,429,942,-530,-346,-454,974,315,-223,862,-828,228,739,-440,649,-46,-420,-49,213,758,-412,197,-824,191,743,518,900,-152,-75,-729,248,345,-463,536,60,142,-326,-968,-429,-43,387,-242,831,591,-268,685,-875,175,312,-715,855,-11,-475,541,152,-308,39,-784,-547,489,344,-311,608,-502,-331,187,-348,-23,210,-920,906,395,-952,-320,-103,-947,778,612,435,-104,303,-758,-988,-446,-525,786,802,348,-223,807,867,88,984,-653,871,792,390,-590,-413,67,-879,676,-301,-46,993,355,426,-902,-316,398,40,-742,-304,-830,-735,-94,-484,-553,115,7,13,992,-463,-953,-600,528,-690,-913,-985,-178,17,939,-892,-843,463,-808,-196,171,-67,901,-549,-641,-348,902,-590,780,-555,86,-141,497,-764,74,428,-265,-47,622,301,-47,-950,771,388,-942,329,-729,-380,-152,-250,305,-498,537,-223,-701,-298,-3,-959,-49,687,918,562,14,-876,411,-157,476,809,-507,-167,977,21,722,-310,-796,-256,-290,445,-498,246,955,322,43,-232,234,-628,-981,865,-357,608,934,311,-770,-251,-304,-898,823,286,-296,-947,-762,21,8,76,-794,840,-338,679,628,-375,645,888,-783,271,-858,612,-330,-86,870,-360,766,-888,-849,-368,-236,515,-509,-818,853,-535,584,362,974,-160,987,-163,357,266,-241,545,865,229,900,793,-744,-50,-202,-277,745,-631,309,-668,-922,706,-712,-210,-86,152,547,-323,-86,227,555,-962,-959,-838,-824,-695,780,-52,-440,472,-686,615,783,-50,-375,-744,642,-929,619,790,-551,440,-873,785,-143,-929,7,74,70,440,-126,-93,-538,-597,-294,-431,-766,275,-307,-973,922,-823,-789,712,950,422,595,-456,-573,775,213,-745,-306,-574,196,4,94,-216,585,220,428,291,829,511,103,340,-895,253,929,-395,285,877,-406,605,968,-639,757,354,459,725,-219,-842,-411,-541,-632,-623,-468,-244,-589,315,744,151,-608,544,-848,-104,-908,-986,-611,-69,-163,108,716,-145,288,284,473,558,122,-521,722,506,-869,-12,396,925,340,268,338,439,112,-85,-530,587,210,-452,436,-460,-855,-20,-118,-199,963,-105,3,630,-603,-719,-59,-408,-930,234,-787,-706,-105,-293,-862,-419,-988,-566,-912,-814,-786,-45,-125,709,704,103,397,856,599,590,-785,-407,-703,-857,-247,620,-364,-651,466,721,-480,464,298,490,85,-627,197,-321,154,672,389,-966,-465,83,775,-908,-988,881,-904,-519,368,157,-706,-366,799,-835,-691,714,-638,197,-508,-852,360,-815,-746,-390,-94,-161,-937,244,28,262,-824,44,581,-445,-93,677,274,-568,-369,-860,-980,744,470,-771,66,931,-675,874,311,-415,626,-280,-419,567,55,116,613,-468,-844,236,367,557,-910,-998,503,177,709,-431,-119,16,-600,-582,916,955,108,428,304,-785,616,-518,-533,-442,683,-673,317,-625,-252,-11,623,854,-776,42,-907,197,770,-12,896,-55,-142,-930,-735,-749,921,-52,140,525,-137,389,-62,-981,52,852,638,-554,349,-847,972,511,53,49,-218,99,551,-680,-643,516,-578,-115,-877,-484,854,588,-717,-549,-258,-170,317,-776,-855,-992,683,-533,363,-721,229,457,337,-960,549,-890,-786,900,628,989,128,493,-25,128,-718,-288,-998,467,423,-994,-778,424,-901,-964,524,-645,642,-404,-614,-539,831,313,615,134,113,-778,986,-121,-124,535,394,897,-472,936,-687,263,209,51,185,-681,437,-408,132,-300,-157,986,-205,-986,-608,-332,279,917,461,-437,874,95,342,553,384,-283,930,-772,907,292,-989,505,272,534,399,-491,245,716,-75,256,575,238,-326,441,772,931,-305,-877,-526,-38,-426,851,175,-642,192,-630,-961,-86,460,827,504,777,665,637,151,-477,-576,-282,125,-917,993,-23,541,-199,-398,320,306,-486,674,758,-363,-214,520,-878,-265,-388,-832,948,305,378,201,764,88,703,-840,-243,89,745,306,-101,892,-783,-70,389,856,-971,-572,-305,892,-408,507,-858,-695,113,373,-918,252,-152,-805,573,584,735,-22,-716,229,-125,780,-252,2,108,-758,16,-990,752,-596,-287,-542,-322,-383,415,-524,-977,972,-868,515,-75,201,-899,-716,-536,-178,764,-688,-528,475,950,942,-303,371,980,-571,986,788,769,-228,791,-673,397,-739,126,102,316,369,32,-607,-803,401,86,544,969,-497,-17,-356,425,146,551,937,993,-718,-505,-398,-285,-837,-557,225,965,-873,-211,-520,271,538,207,-769,558,-759,197,102,349,295,-163,506,-419,-609,-12,216,849,875,-735,689,-276,-168,825,565,445,-32,970,-158,178,-765,741,-335,-33,-703,247,-806,440,-605,728,801,346,-627,-589,-730,-281,34,-849,-128,930,869,792,180,915,598,-325,348,-420,97,-657,-895,-503,-795,814,-499,-432,405,-898,166,-496,-498,17,-586,764,845,200,173,-622,-250,-437,797,351,-587,-872,813,-47,446,945,224,118,-852,248,-964,-894,19,839,653,132,381,-647,85,-104,-230,982,-232,242,-237,-345,-658,368,-397,-700,354,-476,766,-476,-598,-905,337,-874,-440,175,950,458,-388,441,-802,672,82,-654,789,152,714,3,-329,-101,-968,12,135,791,198,609,-669,-467,347,-316,410,-536,-59,-969,-259,-98,-89,-44,871,-545,-402,-446,199,-695,324,-814,648,283,-347,-71,601,-5,-382,382,421,867,972,461,-813,691,412,-123,-93,863,285,-227,-956,907,176,421,-800,-328,-857,598,-424,653,539,397,-711,130,-505,-254,254,-334,-832,-309,-255,-965,511,896,-431,-831,113,76,931,-231,-61,-556,594,-443,-792,76,792,-748,-432,869,665,116,863,-912,-940,11,-819,986,-424,-568,-552,751,-320,-460,830,671,-278,-344,634,26,462,136,-164,223,247,955,-875,-548,498,618,-445,994,223,-373,5,344,-640,793,71,161,531,-866,-860,995,-812,305,253,-583,-527,181,-37,928,180,-16,-56,-322,147,976,-970,-259,322,265,-900,-708,-6,853,824,334,-925,-150,-837,-467,631,-672,565,222,999,-278,393,-750,553,143,708,153,395,135,170,640,-26,-298,643,929,79,795,335,-932,452,656,501,-987,-579,197,-179,-331,632,-274,-942,-623,435,-208,-744,-71,-166,992,-773,905,326,269,971,-324,-375,344,-771,723,-375,-326,450,291,755,421,75,-495,761,-562,-686,-766,-286,778,214,-741,-433,876,206,431,71,-692,-747,-105,138,721,691,-708,-235,-508,-83,-359,610,-965,834,953,548,961,275,986,-339,608,236,772,508,412,-853,590,-517,-311,898,202,102,684,-402,-320,207,-604,310,-123,-132,223,-271,-477,499,-258,508,-770,119,481,-622,-633,403,-746,52,-654,-114,821,74,-590,390,990,-632,-650,-197,8,304,-627,-504,577,-458,776,-345,793,-997,871,578,-360,197,-892,317,514,-756,-310,510,662,406,-765,-931,197,-784,289,-423,395,405,-396,783,-198,-217,799,352,-773,734,133,-344,557,-198,-107,-745,-586,-715,-593,173,388,872,-647,472,890,783,-149,-507,-945,171,919,-408,361,-1000,84,520,-467,-371,180,-835,736,424,697,753,-644,-704,767,896,-242,-732,-282,-759,882,984,211,-873,-154,829,722,-619,294,-836,-86,907,-415,-948,-6,-33,-673,12,-302,41,-145,340,-19,-210,-703,-581,-340,-803,826,-6,252,998,661,30,-90,903,470,876,74,161,-29,-706,-124,510,-846,-707,-50,-466,70,775,81,50,-391,-913,-146,-135,-809,-930,-295,-80,80,-23,-966,598,360,-619,994,854,438,123,231,-688,-401,706,581,185,-35,378,188,-841,118,-408,-18,953,-716,-195,-278,-421,-931,-365,-201,349,-655,-249,713,-806,-290,500,-698,279,512,-187,846,-174,913,-676,418,-79,646,-253,-24,873,-208,-504,-286,861,-597,-902,-727,124,-3,964,620,-789,-726,-886,-438,349,549,-333,-118,-989,-758,-162,321,-525,-227,518,168,-183,20,202,570,-682,-80,632,-678,-187,-113,219,165,-272,448,393,765,85,457,833,-438,-783,-844,148,156,117,-364,716,592,15,-240,20,414,534,-620,506,-282,35,-876,-643,-903,797,-955,-679,643,-316,258,-618,-622,505,763,-285,768,-595,-819,-946,233,-834,-769,-350,-606,424,-603,-266,-489,125,333,188,448,-216,912,738,141,503,-418,-659,-349,544,244,628,545,310,4,-286,643,124,570,342,-705,782,955,388,-781,-629,-769,208,-905,795,-60,879,-592,-790,283,-94,-828,783,-826,493,-916,-697,734,-886,-143,345,445,-268,29,-719,740,833,969,-138,355,-751,338,-706,-71,-755,-889,41,-402,672,-505,648,886,698,-992,777,-821,625,-892,-784,-105,-161,736,739,-792,935,369,977,-886,97,-657,-269,432,417,-666,550,166,602,-98,-119,667,851,-516,-274,-816,208,-144,127,119,-453,655,-809,577,740,195,598,-213,188,319,-219,-216,909,-340,-84,509,887,377,219,460,218,-720,-332,-975,836,-78,-963,-68,-727,912,-147,-530,-622,217,44,-669,739,-870,448,380,697,-285,486,581,-125,539,615,-283,260,161,227,-448,-602,-856,741,-260,-619,-149,242,756,361,180,489,440,-264,331,-310,-688,-157,450,643,346,-758,-791,952,-339,30,67,943,-33,-723,57,51,-899,351,331,-46,10,354,632,36,-484,26,-905,834,-932,555,217,-967,546,883,-962,39,-964,-187,-240,-618,-243,620,-145,211,-140,477,-890,637,-733,-450,-117,106,-245,378,394,903,793,-18,831,-613,-617,-312,927,337,322,-875,-954,424,726,-269,-288,305,-7,935,10,-250,-999,-786,-856,735,-63,-21,-905,-248,-553,738,-561,735,-524,691,74,-942,785,-120,284,765,789,-760,304,-499,636,-610,-808,860,178,215,-779,973,-582,557,-336,696,-232,888,434,555,307,245,107,-327,-534,-1,-137,-106,143,350,-109,951,-818,-779,-866,26,-7,-515,932,-775,48,155,502,-361,-934,202,-921,-204,457,-480,751,685,91,-694,-876,-357,-644,190,-624,-444,536,-227,-147,124,441,-753,354,831,351,-282,-686,435,838,21,-855,-67,-374,-636,392,-965,-796,-560,-872,-676,940,290,277,-678,-948,456,966,-990,-916,-486,-494,-763,-419,-584,533,-407,45,819,-367,-353,-611,291,-647,443,511,-757,-764,700,-311,-197,-783,831,614,130,-359,-708,329,810,-660,-504,-369,168,-561,3,744,-594,-810,754,-493,457,-418,-5,506,-480,791,329,-488,-38,215,-59,373,247,667,-650,-440,-397,-575,-350,114,985,550,-296,110,-128,774,478,-713,-969,898,-907,319,156,952,-130,-690,452,74,-977,807,253,-150,441,683,-97,-284,-370,-274,56,308,753,-957,-394,-939,-640,877,878,-199,976,906,536,-189,849,257,-483,67,-338,-63,-726,-487,-508,-309,851,-416,348,-194,876,-97,149,17,672,-981,-75,124,-321,-466,-261,290,-721,336,221,-757,573,-922,890,708,-720,946,-854,-108,127,611,-860,-865,868,-222,-160,-909,-494,-271,603,-203,854,-753,818,-275,-278,678,-81,808,366,-293,-723,-285,903,-402,-179,-246,9,-61,762,-796,-145,723,-664,136,-224,-396,0,630,344,-192,324,994,205,-436,288,377,840,-650,-322,411,652,-829,-570,-391,855,484,481,-958,192,-904,3,-520,574,-364,-777,236,843,-703,420,-22,945,-510,-413,-185,8,761,357,-432,385,-245,-138,-465,632,199,481,924,-911,737,49,585,13,491,-513,-248,-183,3,-985,-835,277,-766,-573,-896,751,75,390,-452,176,-797,-724,32,-927,-800,841,810,-404,-964,-47,-182,192,560,-335,-421,-385,-982,30,130,-516,532,193,536,223,504,37,203,704,-820,-433,682,1000,745,912,511,-511,-663,371,-365,253,-932,477,373,-486,74,626,966,-571,98,838,914,818,-393,945,-745,-176,727,-517,945,576,867,827,202,875,-46,-400,-184,-670,-563,878,-790,113,379,-275,-899,185,961,-991,-588,897,898,-375,-660,-308,780,-941,-739,35,-726,106,911,-188,-870,343,-335,729,107,-719,5,-495,-388,-151,-494,478,-7,-837,-784,698,86,75,-842,279,187,-938,289,-762,63,-822,834,-174,789,684,-823,-132,188,380,-202,976,-964,-555,976,-245,-364,-139,-641,799,849,-691,-371,732,-349,-913,193,-404,131,89,-971,-270,-873,143,423,582,-693,434,956,-290,-1000,379,284,68,673,715,110,-1,-164,440,170,-695,322,-740,611,-46,56,364,723,988,232,110,-248,573,524,40,533,924,933,-125,-750,77,637,759,555,13,312,201,-394,-612,741,-705,-705,-865,-11,-362,-933,796,-926,808,8,468,-361,-590,93,-258,-648,905,-227,276,-175,-372,650,-674,-500,-796,-685,-974,-151,-464,-831,-145,-485,634,-50,396,-658,-906,-33,133,730,654,732,-699,-625,116,546,690,921,-567,782,69,114,-875,-50,476,-696,-678,549,550,671,-229,-695,510,-904,232,905,312,355,598,975,-271,-327,-967,-773,601,-276,495,915,958,-16,-708,-271,-918,-716,-828,165,397,893,-509,-522,676,809,29,319,597,765,99,936,191,-940,-960,-308,-959,-928,197,109,467,443,-647,-978,534,-857,-231,923,-474,99,-829,-965,-217,280,167,762,-273,575,-314,-508,54,668,-189,464,561,-875,922,396,-389,194,706,-120,400,-772,677,-37,163,628,-470,-888,-887,620,-792,474,-85,-199,37,-775,578,-515,-92,560,689,420,467,-998,-663,51,617,-231,84,-406,622,-238,-332,712,483,902,638,-588,906,588,-962,-29,-557,842,888,300,827,-10,304,-189,428,321,-869,248,-456,453,278,364,-665,550,287,848,-458,-276,-966,631,422,-572,4,-622,222,-146,53,99,-175,320,116,-458,-434,680,320,-501,333,-692,400,324,-786,810,716,807,-377,-472,468,-67,31,-223,-653,-379,-682,109,-473,765,451,731,-974,-397,-776,-339,-659,653,-124,378,591,88,-734,732,-947,442,-98,-338,50,-378,-609,-923,-652,351,538,287,934,477,-318,673,-518,-631,-625,814,-780,571,-759,-819,921,94,681,-819,87,494,634,-458,909,48,-807,8,224,-417,257,309,-773,27,-461,-339,747,268,-435,428,812,-801,-64,-350,-683,-197,-809,796,371,-691,983,-596,225,-177,-225,-585,978,-101,-204,525,-986,501,689,257,616,-350,989,888,651,-269,878,-241,-926,-165,-392,962,992,14,387,979,275,414,-966,-729,398,-253,642,-475,-805,566,-831,-945,802,-328,-830,-47,-237,-930,439,-430,553,-824,561,-838,-605,780,-768,-704,-178,-308,-116,950,581,-630,66,-682,495,444,-652,-646,-638,497,-639,233,-537,435,355,-624,-716,544,348,-43,-534,-321,-437,125,170,-51,229,732,292,-427,104,-695,-37,-444,-104,399,767,-393,426,-725,434,-218,107,-435,837,-425,-569,-238,-559,-183,-443,-526,431,-282,124,-317,68,-3,-445,997,-936,-887,-536,-898,688,847,541,187,-459,2,835,-824,-911,-486,726,-799,270,-552,-996,672,-295,-876,428,-834,-482,647,-693,105,-825,725,435,-403,715,-316,821,457,-736,38,-789,951,-979,940,784,-888,331,-640,-947,-864,527,302,-805,-130,376,-871,-448,-598,891,18,-842,791,-166,-293,-822,-423,-436,-601,-865,-607,-188,719,-764,-33,-837,721,415,-205,-44,466,701,-885,184,88,-939,-658,494,-519,536,648,246,358,621,134,499,400,-903,126,-6,-527,-418,-21,758,309,625,-108,-264,-596,202,309,651,666,432,-701,334,-827,-123,458,-668,-721,174,101,917,-138,-171,514,659,-530,-526,981,789,751,-729,-501,-84,-516,-773,-613,-929,-292,-457,-936,755,-90,-953,353,-800,289,-112,373,508,-96,-596,33,-800,378,-143,522,-874,-53,-330,-303,233,798,-877,543,-796,-78,-187,-221,338,-817,-378,-674,868,-744,102,898,-539,150,-775,-593,-590,646,18,441,-158,-490,522,426,603,552,-564,631,-666,479,966,763,384,967,191,724,-204,-692,-605,-238,156,-272,769,777,977,-585,-191,-852,354,975,279,-22,744,-332,267,-485,-576,221,-94,-541,-644,847,964,199,650,-887,-740,-71,658,-342,453,-529,867,554,725,-182,-40,725,399,27,487,907,223,799,-990,-580,-642,364,-973,-247,328,478,-261,114,-58,-519,889,602,-393,-985,-317,-993,-202,971,337,965,17,-813,-665,640,262,-934,-430,791,672,-691,-296,-992,-918,-385,84,-112,973,67,68,93,616,-564,-466,-664,325,972,-534,431,-138,-188,778,847,965,-351,-645,422,70,-126,-987,177,688,-680,-26,900,613,-714],[212,96,114,982,690,-702,321,-852,-90,203,-708,-994,272,-240,-315,578,437,692,698,-861,-556,-345,420,-683,-527,754,925,-806,462,540,221,-341,-889,81,755,-23,77,92,442,-245,-390,554,-858,-618,826,-91,943,-262,207,-301,349,858,-454,-53,177,830,30,765,-210,128,-821,-244,873,-162,-247,-946,893,-529,-728,-667,396,762,993,-197,837,580,-129,-366,764,-916,696,846,-567,92,792,309,-562,-534,287,44,842,502,-679,871,123,926,-316,784,-165,-645,-84,372,-524,243,-512,610,-527,-385,-625,-203,-483,374,-322,284,-404,-139,270,-203,-218,-3,-888,-556,-903,-229,-382,-193,858,-199,188,-529,-679,110,-612,816,-257,-458,-831,767,316,-753,-150,581,748,-399,39,302,807,218,382,-333,-324,-519,-775,976,477,-816,37,-558,852,736,-455,-592,639,-182,-357,687,316,241,-86,-729,763,-935,-397,-345,-740,-49,-699,-606,-256,938,-133,-808,-984,439,-351,-658,412,-777,-968,-85,388,794,-242,537,-849,-532,-670,494,-790,496,-795,-946,12,-235,616,54,489,-315,269,697,134,-848,903,-842,177,-357,-697,618,-938,-75,-624,-381,527,899,-938,-616,928,-86,970,-407,-404,-316,53,-399,-837,-963,199,360,711,-443,253,-462,760,272,-892,529,372,-988,574,347,863,856,26,853,-673,114,717,-724,-912,156,383,486,714,680,33,-25,-472,-686,105,-971,925,440,691,-747,983,358,169,-895,-885,944,-673,-664,876,-940,58,673,145,-522,38,-558,-553,-254,-369,-353,-770,-644,813,-207,627,-46,-762,9,-939,31,844,456,835,51,-82,-670,686,583,-84,896,685,958,-208,-439,365,245,745,525,837,-925,-227,-991,-764,933,521,321,-95,-325,-16,-205,-408,160,-267,-377,327,-543,579,471,-404,-528,683,-78,-779,954,-142,406,-711,-714,291,-675,998,886,-957,-514,-976,413,623,-72,996,-141,459,174,-235,159,243,508,-358,288,450,-411,-582,-456,-658,619,-811,-534,-643,330,109,-436,-757,981,-374,-395,-720,928,-605,700,442,-861,-117,29,332,832,633,665,490,701,-967,910,577,-648,-61,334,-151,621,-995,197,-399,245,-283,920,514,887,400,299,623,274,129,-815,-721,367,259,-124,-706,-851,-778,-344,946,-911,941,-98,-284,-503,-566,566,-411,183,-192,-133,341,512,475,-195,350,917,777,753,-29,434,379,-673,-660,397,-340,558,977,628,-115,626,113,166,994,-809,672,31,875,970,629,-376,-316,902,-268,-418,891,201,-696,-658,971,132,328,594,-416,-574,-419,-599,-339,-931,-163,132,474,-866,-418,-84,710,659,606,-98,935,685,53,358,-42,-331,-493,432,-159,781,-79,243,217,-229,992,-972,-102,292,-491,43,-552,210,40,-485,-935,-827,629,312,-753,-175,827,410,-129,500,-932,-407,244,-205,-208,-579,160,238,357,207,-730,-498,-684,-725,-852,449,-276,957,83,-480,650,-224,-675,-574,661,-606,-927,-654,885,-326,214,339,601,-508,983,-612,971,856,795,-983,270,131,78,-928,761,-563,-348,-779,692,485,-805,-658,585,213,-558,-706,492,-287,-43,-141,-8,293,233,-59,854,-847,-469,355,245,-436,644,199,587,-902,-503,-426,317,576,-26,428,967,-710,714,-261,-847,-665,355,916,-717,-611,-170,917,-735,139,-126,-878,-655,-457,332,502,815,123,552,546,-660,725,-456,195,-573,382,649,-117,-351,-842,106,215,896,357,505,-75,841,873,446,238,881,671,370,582,902,151,962,330,-25,807,708,933,43,-714,-55,925,171,-413,752,926,379,549,-861,479,706,454,-389,984,-572,649,-625,983,-116,-739,-897,864,-564,-796,-66,-636,865,-670,208,765,-696,908,-925,-352,-140,-368,-466,847,315,-222,-958,776,-166,-512,535,-803,-642,158,-332,-692,705,-835,522,-126,-362,999,-509,405,995,-255,-341,753,468,824,331,-282,-31,755,296,119,-529,954,-950,-850,-375,-267,853,550,-877,12,60,-606,362,-45,411,-314,54,565,107,70,10,445,115,534,852,457,-110,-52,108,317,148,644,118,-900,687,369])).toBe(199553363)
    })
    it('General cases 2', () => {
        expect(maximumScore([-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000], [-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000])).toBe(1000000000)
    })
})