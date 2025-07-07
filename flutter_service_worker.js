'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f5b2c208f3bc4d3f150802eb4dcfe7b9",
".git/config": "b41d195289ecc3eaf767c9c37b508266",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ada01cef6404456dd55f8898f1634296",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
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
".git/index": "80126e44515751ea4735f68074f5d3af",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8681c8211cd79ac8e5e6987ba58575a5",
".git/logs/refs/heads/gh-pages": "8681c8211cd79ac8e5e6987ba58575a5",
".git/logs/refs/remotes/origin/gh-pages": "ddb71d4e76468f4a0891f6009f404296",
".git/logs/refs/remotes/origin/main": "da64f1d85c81ad50a5fd03286d3a2b21",
".git/objects/01/69ccda700bb723050ba935277661fc7a554e31": "9331482d99dccd39b8d2e518cf3b590c",
".git/objects/01/cf57876af61e1ec150508a7cb40b91091ef195": "358aa8c8dfee0a80bef7248804ff150f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/03297e05f943f71ee2c020ca426718a0f0e6bb": "6d38b54f6f25d6793da5b08a1d593ba0",
".git/objects/0a/61d4b8f199f139c9ab4f5b8aba3310ffbffad4": "3f11bd9274d488f0617e541a39cdbf43",
".git/objects/0e/ac3358501d09d96de897b44f18ee9817187c84": "f88aa075bd86e9e5904e6a38782e626e",
".git/objects/19/73a0a72646edc44d0ad7b337681c0c4c90dbea": "185cdceaab2be7f74714a0cdad43a01c",
".git/objects/1a/b1e3df12885f79be999d01353ea27297b02271": "4b9d5f916e47b4a9148f78cd0914927c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/efbc91d0ea110d1be07216df26e6c9f2c42b08": "a545e4f37a0b636ae92af60976502fe0",
".git/objects/1f/f35baaef0efc1cf7239e22b5213e789e4a5c07": "68f703a1e210363f0bbec404c618bf2b",
".git/objects/22/c25b52c1ee5195f61a3611512e4899cd0b4763": "f76fdaf7e00557a4da28bdc330e479b4",
".git/objects/23/64b10154ff6bfeefbfa6099e480e1e534f4946": "c0a75c9538526b8b0d5e45b077dc6a57",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/6594f34132979786d512aaee67cb27ccb16473": "bbc21aa91c185a46f9e0eb37ba05ed17",
".git/objects/2a/0ade51e2e1cdaa4da75c136eaca6277ef58558": "f3f8f12e5b22aa0a42d2567f849fddbd",
".git/objects/2b/1d9e549cbf0c6dc75c2abce96721c6c847428a": "7cead817461239134b50d62e93780062",
".git/objects/37/66d0862c56d75ea1fb1e9ccaac12dd6557a2b2": "a1c4520be6e9fd40fc734b6203967e67",
".git/objects/3a/13d11640eacfef9406a563328a8fdc95126d32": "600cbf282c5de09800a446e23c1636f6",
".git/objects/3d/adc7abe2381c21b835b5d14e8d25ed8cb0894d": "48c4ce0b58cc4c011aa1ad6314a80d85",
".git/objects/3d/ea9259df5f4fbaf498ef39782ea4dabda03d25": "8f0229fc1ceff0a98d59da3057a437e8",
".git/objects/40/7732cdb25fd0312752156ade48ba1a94d49fba": "67a63bdd774f562a6beee4aaf76c6d8e",
".git/objects/42/9ee7eaeadd0ec7fd8843fc50db4d42fa6b6dfe": "d4f53cd6a1c7f31ca34f7fc253c7a1ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/60a20fa1cb0b8ac779db91c4c7fe1944436439": "37196d7d66adf3ecab04972145728305",
".git/objects/4f/a72963164801433c36a6e9b7714ed2e51ef76a": "3449e6b121d97ddfedd0a47e6e2ee207",
".git/objects/50/94d420fcf0c6a86b21086887a0f610c9217709": "87396c2fd977dc95de400490921516cf",
".git/objects/52/37d76b7d80209fa31241824cef4db4d2fe446e": "2d9b6bbdce88e210e0e06d658a697538",
".git/objects/52/4b6042900bb7e799a8a173519c02c657f19815": "7fcd59b3179f0f4b49b629fa110b1806",
".git/objects/55/2d5486a47cbdb7241138d9f950a68e29c631b5": "82616d2b8284a9480c40093b98c970d4",
".git/objects/57/1cf9b8bae3e65a2dadfb3d49058fb4b96b1272": "2d4496c4c5a39a19a9c9b3704e33fec2",
".git/objects/61/922d7c94bc8664fee496b3f8d60f5595361531": "fe5012662b868579d109aff5cba410fb",
".git/objects/63/1f987bfb16db662ebbfbf3397084eddc83194f": "b8f16ee2ffd4c685038ed9ecb28d6a3c",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/a04b9a5ba1a56e905246c1976899ea85a305d1": "3c09d8f9c9b68af8307bbcc992184020",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/98dcc0c60d0b2fbfbc1b591f3b9a556ff482df": "519b76b72ea4f7bad0273616b64d8655",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/01587048cf1e532cd4a9fbbb82ace7b07a2e07": "904c199b019b1545d9647f16d64c2f1e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/d0ecaa22dc4091d42f3fa2e64863e2ae84aa27": "f7a4b9e34e5bde8b7b245e5ef2b2c871",
".git/objects/81/038fffc2a46a932a753db2ddf90d382c3f323e": "781f55beba0049cf1c21d2ba3014d6eb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/091228ffc83310c882ffec2e0ad0a48fd34e98": "cc840b0ad7b974e084910d5694a97bad",
".git/objects/92/24129ee14ef1bc2970ee147c2a7d996ebe7c12": "2b6773d55ff2d71a56bfdb1bf06bb5e3",
".git/objects/92/9b67576520e517bbd2f86f8521869ebb4eeda3": "6cedb6c37fcb0c826556024ac61399f3",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/0ea0c49f6ea892bd7bfd6f27d1a3ac6a6e2a18": "42a3b089e9051823641dffa38f598b71",
".git/objects/9b/63213e72e75caf5431bbc2d26500710daf0907": "5d182c5fbc236a892b3cdf64a7a681ba",
".git/objects/9d/b80ec3a2bd0ac30188552cc3c29a65f8833dca": "feeb4d7e74455911f85f4493b9da1809",
".git/objects/a4/cbcdd0549176594f18962baf7981e54cfc05c4": "7f0f90b13f3cccf7c8466c990e40161e",
".git/objects/a9/54d73d1007a32bb8515a783abbc8779bc9ff69": "7aa299ed6b388a286f27551ae74f0f15",
".git/objects/ac/9597f554bb0f7c0dc6e1186ab83a43de125fae": "6f152f0ea5e8573419f788d098701afd",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/5fbea41d168c94854919982884f9f8598a4214": "b25bf9ae191545113474c5836d35203e",
".git/objects/b3/b6755fc4fe9369256fcb19477e6994585edcdd": "f97576836eb88ec6003727d4a8e3a8de",
".git/objects/b4/a8e37d829d3ad13fcd9bfbbd3613ade52084bb": "c77a892e8af8f66a24ab9603edeeb4d6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/257d5bac2d49b3eae2f15a43887a1f2ddd0a5f": "bd8167f5d9854b1028f50ffae36a2f8a",
".git/objects/be/f418797d7b593e74d01e9a61c08b8447df6fbc": "18986437897357a7657f4f42f4ac0cf0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/aa64b152cf00ffa80395a9f69a48a80903c579": "34bf69b635cc7037cd46a5a25f123c8b",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/1a2343d9493d632026736d805581ce85f85148": "70a50a15dd47d51ad3a9e48556688e34",
".git/objects/c7/20fa51dee668e4c6ff77ca8f14cf61c1ec3b7b": "29078bf76c7f8ae17ac0688b15452615",
".git/objects/d1/334d64df016de2deecc5e5f0f7f6e54cb1103a": "ed837c2b68be4efc6cc33fb0b0bb8966",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/819d39f7aee28154c1e4cdd858ac63b48cf3b1": "eb7d927b074f74bf5f1a52850d53d5ef",
".git/objects/df/9255e335d14cf99f1b97621b494e7a7921de21": "e481fd71ed60d59c65c90b72e7940f90",
".git/objects/e0/3f1904f001e0184e06e0cfa5cf1e4e7f3780ae": "ff603177b80384ade925379606a143ec",
".git/objects/e4/bd120a1e81a01507a9171f2e271bf8dbc80d3c": "6027129bfb2bdc1d5748cc6e1a01e86e",
".git/objects/e9/438369b0e259de2c236920c4261fc251eed389": "2975fa19afe7382e19958e445b855c8d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bf8de51fcced6fe94dc089b3110195a4b2bbba": "fb6eeacf494c2f4216d77c559aa1c9a2",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/0847b1daf1ca08e8147a709301cc94ed100586": "5dd9a23abeaee0cd15c8389a8b7c5aa5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9bb512c5b3fbff4081fcac7baec472098e5ee7": "6699bf97c213e582d7d9e65c74a57795",
".git/objects/f4/6a25b844dd29524854935f2a36d56f4391f0fa": "3ac650810baf51c6c895e89458de6e20",
".git/objects/fa/bd2c3fc73cc4c3a05653d43286425ea048d979": "3631e3b806d280bb3a64a406db602b6a",
".git/objects/pack/pack-e9007923d7db3b69e512ba131940c8f5d1d394fa.idx": "e1372734d070c444f9a5a4ee721a2c99",
".git/objects/pack/pack-e9007923d7db3b69e512ba131940c8f5d1d394fa.pack": "7be1f1f256f444d5c4c2269d3917d143",
".git/objects/pack/pack-e9007923d7db3b69e512ba131940c8f5d1d394fa.rev": "12307b6b80220d23f962a31cbaf0efd9",
".git/ORIG_HEAD": "99ba36c12cb3ea082b3e63d71071de34",
".git/refs/heads/gh-pages": "99ba36c12cb3ea082b3e63d71071de34",
".git/refs/remotes/origin/gh-pages": "99ba36c12cb3ea082b3e63d71071de34",
".git/refs/remotes/origin/main": "efdb06be344c42a55930394965aaaa82",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fe9f1d44beb224ee448d0b2c057fc461",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5abe5dbfb45080e32e29e9bab49e66d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ae84c67592e8bd21a14c56e495e7976d",
"/": "ae84c67592e8bd21a14c56e495e7976d",
"main.dart.js": "05fd260cc17d34720373a4fb0991843f",
"manifest.json": "9a80ab75298482da9e9d575390deb247",
"version.json": "d33b43a60e6f0c397215496af8078fc6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
