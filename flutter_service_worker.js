'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a660eddcb7566dde470608c58798406c",
".git/config": "305b83fc89929295d153cbb9ba8a1008",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "370b7450e384bf615117fb3ab8c66abc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db873ee4f3519f0d8d8f7fa22d2a0faa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "495d6d2ec5e18fc9e4b2a1e139b4428c",
".git/logs/refs/heads/main": "a33c3024af20462f2e729918e17d7bdc",
".git/logs/refs/remotes/origin/main": "db667971114195a2af5d1b7a3700a014",
".git/objects/06/10ab8c61c428d568426b7f390044ade1b9c600": "d006155618c8917f2dcf18ba500a2271",
".git/objects/06/625440ec21b6e44a17e019a44fe8eb210b4d00": "604391af3b373168702628265437ef8b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/8d1ac0994b3a0586ab6b0bb41b2b86ebd47ffa": "ff4674f9a251007572639a5bd07e6139",
".git/objects/14/82a8a9c4e205eecdbe5f625afeb8e1ada4f2d8": "d32e08c82c210558d00b96cf8336c501",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/ae993f3172376c47d342f1a455a31b5737468e": "7c2b67762d28cd547fe14a02fb35ef9e",
".git/objects/1c/ab72b173f08c6100e2d5b4121e94d293714f68": "edcffabf84c9a59df30c3d85f27f8cd0",
".git/objects/1e/93776da384c02ed42e700e848f08981c989dcb": "cb028dcc27327ec6e598296586e7c4c5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/8b65d7bf0e329c52e69852e361d5533751b9ef": "14eb7f0f8c6cc336950707aa1ee06f49",
".git/objects/23/1539e671dc450dc50e312301d15abf5e59ce05": "b47e38f4bd3a29613a76ccd16884179b",
".git/objects/24/c1b4440ebdc06a411314da690db49a7b6e5682": "e5577cfc7dca64cb2445a446c01dc47b",
".git/objects/2f/406e0b93eab3dcd6ba8cdbcd2ff16e06046e37": "258b1793c3795469f77802762c891627",
".git/objects/34/d551e6b0ae30afc2cf8618c33a36b08174a965": "3b43933706be1bbe2035e2e0507865dd",
".git/objects/35/3982e94b6f27bb53d8c3554e32e1f0990da55c": "8beeb98880a8a2a84cce13d48377b997",
".git/objects/3b/cdfe8a8c346ed9a52fb3687246040acd01ac1c": "76545b0a5ff55f5abac7ec7979b0e5c7",
".git/objects/45/52d530c9dc93493cd1ed6fb2eb7aa06f23e039": "af2614d43592b8040282b21706ccbab1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f2081d21bf7f0ed5d3adad4bf01f8ed78a2d75": "06e1573f72f3ad8fd3d15f410e04ef4f",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/5f2307fc7726722b670463cb1461ae7cb26c99": "e81d262e7718e3ddabe1b77a337b9f43",
".git/objects/4f/a8874dea34de0fd537c3c23637a65ae1017364": "d46b4296ed2f7f0481b58f66a4bd2234",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/17bc8fa0da7892deef2d5dcf5f72e745882e18": "0aea484b54b67886a21d04d43fd7464f",
".git/objects/58/b261f83ebba0f9cbbcc45e1342ae3ede83dee7": "b369ee3d27505fe3d27973b391d4bc95",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/02dd336ad796464d65e08f03478befc9921d47": "8ac48ba7d77cd75eaacf24e52995ef7c",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/9c81dfb2eab5a0c7940b11faed60500caa326d": "9af0b93db8008d95b82408ab7b3da764",
".git/objects/64/c1005ec9157ac45d2b0cc7f670a27247ce5eef": "f0a78260d022f121668a7a81a9b55f86",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/755c997f357dc5d19792cefda0f6bb7b9b89a0": "a626c69a57eb75f4908aac0d5659a56d",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/1fcbf25f4a4e00cdd06e3a59e099a5752fdf2f": "ae2ace05ddc6b627c48d78c44a252e58",
".git/objects/79/85b41958f2ec92483b7814bd00fa3bca1b29df": "4bed9caa628887a860deca52af267b33",
".git/objects/7f/4acbd3a0a04a4284e997f01a0d380e6d7609cb": "94f9062ddfa737bd3be5cfdd4b91780d",
".git/objects/84/1c3611f1f66d324d79b96d5276e0a8d95a5548": "948caf71543f8e766d30653415e64346",
".git/objects/84/50b90e451cb9d5472dbdf26b93ad4c986a6f50": "84013ac8b96ade55b0d66eca17d11790",
".git/objects/88/824fa2034b061ede5eb2a2ae57348808cce50c": "bd2f4b955a5e9f9d844d37f553ba5e83",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/06461b2a98141312db9d70ce53156086e6c350": "c6250aed9f88204b5d9697de20110708",
".git/objects/90/97ad707a2a5bd5f410a66c2dab6ab5dcb3ff1d": "07cffadf78ea844b6677693f8abb639b",
".git/objects/93/0261eb66ffc00a0fce2ac792153f4f5bd8be25": "b6f90792780ca6a72ab5c0ae958f594a",
".git/objects/93/1a827a8d6b2aa9dcca72a41ac9f4a04c48129c": "adaa626940ecd500c9bee03d5df4ebfc",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/eb97eccc7912de642bb4fb76dcf2b5e8634ec4": "de0fe8c93dccc5d3cf838632e59040ff",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/a3/aa0d4386a4c95cca2eb0c94cbf482dc51d7b10": "49d468234eb5a6f9620f11f15a4f8e73",
".git/objects/a4/34a3426bc453a0b071815dbe15e1a538a64049": "f11498e75c9c7a1a2abf2bce02d5f5a6",
".git/objects/ab/bf37f72a8cf083b306f7758b6664ed477f52d5": "f0b4825df31be46748faca7b86efbaf2",
".git/objects/ae/d7ba3401d2c368482d542c8e1a33660b2e4c8a": "322458f1dc31c28ef1b6966a32442ab3",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/8546144816d9885634f2bd55a2bbe98f2a2ae0": "8cf186f4c378f743577afe3893f8a0b1",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/1543c07a558ff0e52663acd4adb934afda246c": "bd74ba297f6bb6af8784ac7b7418e4da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/9edcdffd3980590c867feb1ca21ee636fb259a": "34f73ef2e79f97332c40949a625a28d1",
".git/objects/be/9ca37bdf70076ac717ea2dc98503907b5e5bc6": "69e3493e1aebf1d94c0148c609506bb3",
".git/objects/bf/4f14453c306ace161ecc76aed6b3920b729e98": "18ea9777c9d7496431d7cdf8d6ad42c9",
".git/objects/c4/2c3908423f64a1ce0faabbc10f2c978f80c6a9": "b2bb1a8efe6405cd477ca8042fc3fe00",
".git/objects/c5/b0f46b757764ea228bb7af5ba6bf9d3e92f8b0": "14072be8d95c126cb60b25a4ee0a1828",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/cd/a3bcd47f1e5a193ed400246fe30925df9136ab": "b3998304b17bbbef04c642c5239f4fcf",
".git/objects/d3/e35c5953b81bbc41a118965a5559b9762dd835": "bfd4f6466fdff2a18a509a76f21ad4a9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b98a2983690e123e3bfcfb425e2b1dceefa302": "2fd9b6d04253f1d580b429e9118572db",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/1985aeaf94a044484b89cca2c94787188643a8": "afd78d4020e6fffdf10bd6994796d7da",
".git/objects/dd/a1ba05427e81c5c8f51d9382613c246e52f731": "c5898af8feb3111783951c371ec98b96",
".git/objects/dd/b4e5e95dec318813038fabad4eb7cdf0bdadc7": "0c10b63d18f8dde9073d2bc35edca75d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/b002350013e5c63ad10991cbfa737dccc9fefc": "12e89a0e41a03c41504f9c0335863afd",
".git/objects/e6/9188eebc8df75f727d212b1b7572487c544355": "743b6d2d7f55e309f9e48ca15d381e0e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/7aa1bbbb93b35183c50cd4fa996edee7e82f54": "7eb74381d8746d061db3a4efed517ea2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c74d9d05a894b27825feb0984f6b397d3d4ef4": "60e28111d107efaa7e5f6395864284f0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/23cd761ecb63fe5d85f5ccc6da5ff0aa25964e": "26bf4e75020676b16e131de212444168",
".git/objects/fd/4f6b74136ab050fe37875f5e2efe4726f005bc": "e28e9c2db1bb537f8164e803fd883382",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "3d79dcded9ef5fa63cdba02c0036de5f",
".git/refs/heads/main": "d19df383b44ff4cd07a55392eefed21b",
".git/refs/remotes/origin/main": "d19df383b44ff4cd07a55392eefed21b",
"assets/AssetManifest.bin": "4cb39f526b4c66e1c847d786cd412469",
"assets/AssetManifest.bin.json": "ad1d33d8588c7101a29d3c47bf0f1c5b",
"assets/AssetManifest.json": "52e3bb952682a16172cde68c3fbb8aab",
"assets/assets/animations/circle_animation.json": "1a65f3cfc5953553c2d363018d839467",
"assets/assets/animations/earth.json": "0430d83ed8974a317ac965d14f1e9525",
"assets/assets/animations/github.json": "c032515855f3e90a6f72c48673388533",
"assets/assets/animations/rotating_dots.json": "97bdf9ecb2ab3c0d8f27f5db6bfdd24b",
"assets/assets/animations/round_earth.json": "250147dad87e1560ed9034dddd7967d0",
"assets/assets/animations/spinning_circle.json": "62b5a5847d0bf5b10bd526719a1e7191",
"assets/assets/icons/css.svg": "588acd77b7208bd05f6acaff9f0d2f9e",
"assets/assets/icons/dart.svg": "ac19dde193cd6510397952f0c2fae919",
"assets/assets/icons/flutter.svg": "431a7a316b5718239632eff7becc3eb9",
"assets/assets/icons/go.svg": "5e487f59f465e3dd17a4ebdb73d80e19",
"assets/assets/icons/html.svg": "140363bf89baff1016308e972257def8",
"assets/assets/icons/js.svg": "2be959030721cbbb5682ddecfafee4db",
"assets/assets/icons/node.svg": "361eb3f2b1474f8adddb89a88fe2438b",
"assets/assets/icons/nodejs.svg": "42f9a28046a5f3125db84550964f2a03",
"assets/assets/icons/postgres.svg": "c38c08337572991187b5d03f11ec1e4c",
"assets/assets/icons/socials/facebook.svg": "d6d4ff5abcd1d7b02a0b1a353d84070c",
"assets/assets/icons/socials/github.svg": "813c6790857607b43bd965eeae40754a",
"assets/assets/icons/socials/instagram.svg": "abfe70361d37471fb39f7967cc33ed16",
"assets/assets/icons/socials/linkedin.svg": "b10794f1d2cfb39d57b3216e801dd9a7",
"assets/assets/icons/socials/twitter.svg": "a718f98b67b5b6d3e99e62d099f0f359",
"assets/assets/icons/vscode.svg": "4fde28ee18aecce85a49163b6775226c",
"assets/assets/images/blog.jpg": "d6f77cc54abdc1b34b5853b54b857c75",
"assets/assets/images/map.jpg": "610b989408aae0dd344556fa83736353",
"assets/assets/images/music_player.jpg": "70af6febbc5a3f22a0ccfad0e7e935b7",
"assets/assets/images/photo.jpg": "169a268869c00542faad3f1b733eb3fd",
"assets/assets/images/photo.webp": "5c9cc18fce859a871c7c844dadc54877",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "48ead2ee838d176386505db30f3e6bf4",
"assets/NOTICES": "1d57a685027e29acccecee525b581abc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fb3e6d424a4604d786204c286149b17",
"/": "5fb3e6d424a4604d786204c286149b17",
"main.dart.js": "01ad7ded9d52ae8e72e259f40c5eb78b",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
