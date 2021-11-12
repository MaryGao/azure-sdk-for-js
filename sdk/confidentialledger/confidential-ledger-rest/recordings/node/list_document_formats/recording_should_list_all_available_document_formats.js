let nock = require('nock');

module.exports.hash = "f4ea609ec32b97139dc41b09142a86a7";

module.exports.testInfo = { "uniqueName": {}, "newDate": {} }

nock('https://login.microsoftonline.com:443', { "encodedQueryParams": true })
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, { "tenant_discovery_endpoint": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, [
    'Cache-Control',
    'max-age=86400, private',
    'Content-Type',
    'application/json; charset=utf-8',
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options',
    'nosniff',
    'Access-Control-Allow-Origin',
    '*',
    'Access-Control-Allow-Methods',
    'GET, OPTIONS',
    'P3P',
    'CP="DSP CUR OTPi IND OTRi ONL FIN"',
    'x-ms-request-id',
    'c42eabbf-cd97-4f19-81fd-9c4afb0b6700',
    'x-ms-ests-server',
    '2.1.12171.15 - SCUS ProdSlices',
    'Set-Cookie',
    'fpc=At3qC0E5Z0NNiPb_sKYJb94; expires=Sat, 04-Dec-2021 17:16:35 GMT; path=/; secure; HttpOnly; SameSite=None',
    'Set-Cookie',
    'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevramNKMTqhO40ysJSwrCSkHP6WO0RyYr4vZ75uIJcAjhmMYIqfMRsrp2A-hbTCzzTvpfuKcXvzniUozAOvGrkyfPCrZavjE-V1RGLesaOlzvk7Z6nZx6j3jzisyoG8feUmcXyziVbWzhaThja7Yv_HEWEJQRrJbFcvtVHfSgZxOOogAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
    'Set-Cookie',
    'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
    'Set-Cookie',
    'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
    'Date',
    'Thu, 04 Nov 2021 17:16:34 GMT',
    'Content-Length',
    '980'
  ]);

nock('https://login.microsoftonline.com:443', { "encodedQueryParams": true })
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, { "token_endpoint": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos", "tenant_region_scope": "WW", "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net" }, [
    'Cache-Control',
    'max-age=86400, private',
    'Content-Type',
    'application/json; charset=utf-8',
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options',
    'nosniff',
    'Access-Control-Allow-Origin',
    '*',
    'Access-Control-Allow-Methods',
    'GET, OPTIONS',
    'P3P',
    'CP="DSP CUR OTPi IND OTRi ONL FIN"',
    'x-ms-request-id',
    'de050412-41bb-49fc-8d85-127a4a7f1300',
    'x-ms-ests-server',
    '2.1.12197.4 - NCUS ProdSlices',
    'Set-Cookie',
    'fpc=Ag1ar67C-flHvuwu9ko69HY; expires=Sat, 04-Dec-2021 17:16:35 GMT; path=/; secure; HttpOnly; SameSite=None',
    'Set-Cookie',
    'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr7Dua7UDN_73yTm1BZ9YGKhVAet2snbV9RhlpcoChLfl9hJmASUlUGlijOloMAY2IB55SHWK6i1vzEm9rCU3ZTgOP6-c9trxsAxq2IamXDqDmTyb-AGElbQoGEf_Qr-GTbBHJOFRatOyejTa6UplAZLhY8tS-Ab7mlJYHQncdk4ogAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
    'Set-Cookie',
    'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
    'Set-Cookie',
    'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
    'Date',
    'Thu, 04 Nov 2021 17:16:35 GMT',
    'Content-Length',
    '1753'
  ]);

nock('https://login.microsoftonline.com:443', { "encodedQueryParams": true })
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.2&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=8646f97c-1fa1-4958-ac7a-929b9b369479&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
  .reply(200, { "token_type": "Bearer", "expires_in": 86399, "ext_expires_in": 86399, "access_token": "access_token" }, [
    'Cache-Control',
    'no-store, no-cache',
    'Pragma',
    'no-cache',
    'Content-Type',
    'application/json; charset=utf-8',
    'Expires',
    '-1',
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options',
    'nosniff',
    'P3P',
    'CP="DSP CUR OTPi IND OTRi ONL FIN"',
    'x-ms-request-id',
    '540ac22c-ba7c-474e-a1ec-35997ad01200',
    'x-ms-ests-server',
    '2.1.12197.4 - NCUS ProdSlices',
    'x-ms-clitelem',
    '1,0,0,,',
    'Set-Cookie',
    'fpc=AjJvfqrgXm1AiBZqkhWZwQwGjkxwAQAAAHMMFtkOAAAA; expires=Sat, 04-Dec-2021 17:16:35 GMT; path=/; secure; HttpOnly; SameSite=None',
    'Set-Cookie',
    'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
    'Set-Cookie',
    'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
    'Date',
    'Thu, 04 Nov 2021 17:16:35 GMT',
    'Content-Length',
    '1334'
  ]);

nock('https://endpoint', { "encodedQueryParams": true })
  .get('/app/enclaveQuotes')
  .query(true)
  .reply(200,
    { "currentNodeId": "cda0fa96a7916caafd144ea4b3d4188b197cff605b32416a3b47c1c69aeff594", "enclaveQuotes": { "48bde5ab681ce4f35e78161cde552e8800784051a3602b3706c3a200d074f68c": { "mrenclave": "8e67b83969dea1207c06fb5191bfd45662c196d030bed26796b75f09c0e1c4bc", "nodeId": "48bde5ab681ce4f35e78161cde552e8800784051a3602b3706c3a200d074f68c", "quoteVersion": "OE_SGX_v1", "raw": "030002000000000005000a00939a7233f79c4ca9940a0db3957f06074fca16e1b382cc4d9313fca5acbf408b0000000011110305ff80060000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000007000000000000008e67b83969dea1207c06fb5191bfd45662c196d030bed26796b75f09c0e1c4bc000000000000000000000000000000000000000000000000000000000000000056a35b461bd8042255f6d33ee5ce7afa34f7024a35b74f15c5808e0c00864226000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ab4ecfb2f7844a8179722eb80a639691a8bbf86c99e95d39f2d683beafefa6a0000000000000000000000000000000000000000000000000000000000000000341000002525ef54e5c5dd0d32973cc9c759fefc30c7aef7094c18134ef0e35117403532c109de78dd7fabceaa4c6ae624239e2417a932f0bb32eea17ea8259c241bfa0d8eb0721568eb8eefb5ffe48d4c0535ccbd637f6998f30d252334d093bfe489707cef9b5abbe51428ff6feb0d5590723896f7e3d8466e7c4c7f661f5588b1cbc011110305ff800600000000000000000000000000000000000000000000000000000000000000000000000000000000001500000000000000070000000000000060d85af28be8d1c40a08d98b009d5f8acc1384a385cf460800e478791d1a979c00000000000000000000000000000000000000000000000000000000000000008c4f5775d796503e96137f77c68a829a0056ac8ded70140b081b094490c57bff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045566c39ee9249e7f197a87256fd7267ac67bec7f27e6133d95306656244366e00000000000000000000000000000000000000000000000000000000000000007d1cada36a9e54bde941973bd2de03d5304bffdd775474aec6d38207272d9226a3e9e0314555d3960507f3224cf7d2009d75c8b968071fc31094a3dfb999c1e42000000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f0500cc0d00002d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949456754434342436167417749424167495545646d6b4833625131367152525856766e73307369596b3979495577436759494b6f5a497a6a3045417749770a6354456a4d4345474131554541777761535735305a577767553064594946424453794251636d396a5a584e7a6233496751304578476a415942674e5642416f4d0a45556c756447567349454e76636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155450a4341774351304578437a414a42674e5642415954416c56544d423458445449784d4449784d4449794d5455774e466f58445449344d4449784d4449794d5455770a4e466f77634445694d434147413155454177775a535735305a5777675530645949464244537942445a584a3061575a70593246305a5445614d426747413155450a43677752535735305a577767513239796347397959585270623234784644415342674e564241634d43314e68626e526849454e7359584a684d517377435159440a5651514944414a445154454c4d416b474131554542684d4356564d775754415442676371686b6a4f5051494242676771686b6a4f50514d4242774e43414152680a5247587236365079506673764a55444a666158563841575957586768454e6b784638614d6d3471396a5a543546356d2f4d446b466365724a735a486c6d2b58710a4471673138452f344f416e39622f70344e366d796f3449436d7a434341706377487759445652306a42426777466f4155304f6971326e58582b53354a463567380a6578526c304e587957553077587759445652306642466777566a42556f464b6755495a4f6148523063484d364c79396863476b7564484a316333526c5a484e6c0a636e5a705932567a4c6d6c75644756734c6d4e766253397a5a3367765932567964476c6d61574e6864476c76626939324d6939775932746a636d772f593245390a63484a765932567a633239794d42304741315564446751574242537956634a3754335950586f383059535762493759504e514233506a414f42674e56485138420a4166384542414d434273417744415944565230544151482f42414977414443434164514743537147534962345451454e4151534341635577676748424d4234470a43697147534962345451454e4151454545475a445038395a483248673435704f4f5337372b564d776767466b42676f71686b69472b453042445145434d4949420a5644415142677371686b69472b45304244514543415149424554415142677371686b69472b45304244514543416749424554415142677371686b69472b4530420a4451454341774942416a415142677371686b69472b45304244514543424149424244415142677371686b69472b453042445145434251494241544152426773710a686b69472b4530424451454342674943414941774541594c4b6f5a496876684e4151304241676343415159774541594c4b6f5a496876684e41513042416767430a415141774541594c4b6f5a496876684e4151304241676b43415141774541594c4b6f5a496876684e4151304241676f43415141774541594c4b6f5a496876684e0a4151304241677343415141774541594c4b6f5a496876684e4151304241677743415141774541594c4b6f5a496876684e4151304241673043415141774541594c0a4b6f5a496876684e4151304241673443415141774541594c4b6f5a496876684e4151304241673843415141774541594c4b6f5a496876684e41513042416841430a415141774541594c4b6f5a496876684e415130424168454341516f774877594c4b6f5a496876684e4151304241684945454245524167514267415941414141410a41414141414141774541594b4b6f5a496876684e4151304241775143414141774641594b4b6f5a496876684e4151304242415147414a4275315141414d4138470a43697147534962345451454e4151554b41514177436759494b6f5a497a6a3045417749445351417752674968414a497245793530694b564857596f70573844500a56525366306859546f7232535830674b4f517569354f644241694541354d6351674a7a615550497a456342714c7970554a646a6a5a6e694c77686458387a75520a496458303244593d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436c7a4343416a36674177494241674956414e446f71747031312f6b7553526559504873555a644456386c6c4e4d416f4743437147534d343942414d430a4d476778476a415942674e5642414d4d45556c756447567349464e48574342536232393049454e424d526f77474159445651514b4442464a626e526c624342440a62334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e424d5173770a435159445651514745774a56557a4165467730784f4441314d6a45784d4451314d4468614677307a4d7a41314d6a45784d4451314d4468614d484578497a41680a42674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b4442464a626e526c0a6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e420a4d517377435159445651514745774a56557a425a4d424d4742797147534d34394167454743437147534d34394177454841304941424c39712b4e4d7032494f670a74646c31626b2f75575a352b5447516d38614369387a373866732b664b435133642b75447a586e56544154325a68444369667949754a77764e33774e427039690a484253534d4a4d4a72424f6a6762737767626777487759445652306a42426777466f4155496d554d316c71644e496e7a6737535655723951477a6b6e427177770a556759445652306642457377535442486f45576751345a426148523063484d364c79396a5a584a3061575a70593246305a584d7564484a316333526c5a484e6c0a636e5a705932567a4c6d6c75644756734c6d4e766253394a626e526c62464e4857464a76623352445153356a636d7777485159445652304f42425945464e446f0a71747031312f6b7553526559504873555a644456386c6c4e4d41344741315564447745422f77514541774942426a415342674e5648524d4241663845434441470a4151482f416745414d416f4743437147534d343942414d43413063414d45514349432f396a2b3834542b487a74564f2f734f5142574a6253642b2f327565784b0a342b6141306a6346424c63704169413364684d72463563443532743646714d764149706a385864476d79326265656c6a4c4a4b2b707a706352413d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436a6a4343416a53674177494241674955496d554d316c71644e496e7a6737535655723951477a6b6e42717777436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e4445784d566f5844544d7a4d4455794d5445774e4445784d466f77614445614d4267470a4131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e76636e4276636d46300a615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a42674e56424159540a416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a3044415163445167414543366e45774d4449595a4f6a2f69505773437a61454b69370a314f694f534c52466857476a626e42564a66566e6b59347533496a6b4459594c304d784f346d717379596a6c42616c54565978465032734a424b357a6c4b4f420a757a43427544416642674e5648534d4547444157674251695a517a575770303069664f44744a5653763141624f5363477244425342674e5648523845537a424a0a4d45656752614244686b466f64485277637a6f764c324e6c636e52705a6d6c6a5958526c63793530636e567a6447566b63325679646d6c6a5a584d75615735300a5a577775593239744c306c756447567355306459556d397664454e424c6d4e796244416442674e564851344546675155496d554d316c71644e496e7a673753560a55723951477a6b6e4271777744675944565230504151482f42415144416745474d42494741315564457745422f7751494d4159424166384341514577436759490a4b6f5a497a6a30454177494453414177525149675151732f30387279636450617543466b3855505158434d416c736c6f4265374e7761514754636470613045430a495143557438534776784b6d6a70634d2f7a3057503944766f3868326b3564753169574464426b416e2b306969413d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a0001000000000000000100000000000000100000000000000020000000000000007367785f7265706f72745f646174610048bde5ab681ce4f35e78161cde552e8800784051a3602b3706c3a200d074f68c" }, "c801be0e15cdd5fdef828ec11b69551941f48aa200c17438d11286471c3e118c": { "mrenclave": "8e67b83969dea1207c06fb5191bfd45662c196d030bed26796b75f09c0e1c4bc", "nodeId": "c801be0e15cdd5fdef828ec11b69551941f48aa200c17438d11286471c3e118c", "quoteVersion": "OE_SGX_v1", "raw": "030002000000000005000a00939a7233f79c4ca9940a0db3957f0607f471d316335a86ceb76e06231987a82e0000000011110305ff80060000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000007000000000000008e67b83969dea1207c06fb5191bfd45662c196d030bed26796b75f09c0e1c4bc000000000000000000000000000000000000000000000000000000000000000056a35b461bd8042255f6d33ee5ce7afa34f7024a35b74f15c5808e0c008642260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000078c32d2a305014f726ee776e3ddce1e78ace9dbdc80afffcdac36183db4aa88400000000000000000000000000000000000000000000000000000000000000003410000079e0ccf41c1bf95814e94b1bb528286360ab348fbdbe6d88ab4326e92b0e22b6aafdba795661c76216f638917f703874b7a7c11b09136e1c40c759079e08d25ead98b2a54c00819c809031c1c532fe81474455b2164af72abc5adf1fae294c2d211d5d91cae5a63dba4aa0fef0c2ee40f07326a4e6c12fbe0e3e4301ae6c755d11110305ff800600000000000000000000000000000000000000000000000000000000000000000000000000000000001500000000000000070000000000000060d85af28be8d1c40a08d98b009d5f8acc1384a385cf460800e478791d1a979c00000000000000000000000000000000000000000000000000000000000000008c4f5775d796503e96137f77c68a829a0056ac8ded70140b081b094490c57bff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000055ff9841726e0844f79627ed52300e9ed3d80df9b96c1b5077be05eae8c7f7240000000000000000000000000000000000000000000000000000000000000000f88d17f91c2dfcf5a0bbbd331f00ed75ae2476865c49bff369dfeb47e0a2032cb5e0778b5b9ca6a1221b6e351e4dd4003c6269facc7f1b70f05ce5671d090a232000000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f0500cc0d00002d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949456744434342436567417749424167495641507a733541517737784d2f6d2f44356f5669685176326a625a75664d416f4743437147534d343942414d430a4d484578497a416842674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b0a4442464a626e526c6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e560a4241674d416b4e424d517377435159445651514745774a56557a4165467730794d54417a4d6a4d784e7a49354d446461467730794f44417a4d6a4d784e7a49350a4d4464614d484178496a416742674e5642414d4d47556c756447567349464e4857434251513073675132567964476c6d61574e6864475578476a415942674e560a42416f4d45556c756447567349454e76636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b470a413155454341774351304578437a414a42674e5642415954416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a304441516344516741450a3935686643793248525170376e7766332f776d6a636749646e464f737632634b62525263547077797937466b4c71744d7a2b503234414751433737777350664f0a3141677165677543693065366e4b4531514f5553324b4f434170737767674b584d42384741315564497751594d426141464e446f71747031312f6b75535265590a504873555a644456386c6c4e4d46384741315564487752594d465977564b42536f464347546d68306448427a4f693876595842704c6e527964584e305a57527a0a5a584a3261574e6c63793570626e526c6243356a62323076633264344c324e6c636e52705a6d6c6a5958527062323476646a497663474e7259334a7350324e680a5058427962324e6c63334e76636a416442674e5648513445466751552f6746447943726b593350577134554565386e2b6337444f4b74497744675944565230500a4151482f42415144416762414d41774741315564457745422f7751434d4141776767485542676b71686b69472b45304244514545676748464d494942775441650a42676f71686b69472b45304244514542424242374d744e374b536a6d7656797674544641645274394d4949425a41594b4b6f5a496876684e41513042416a43430a415651774541594c4b6f5a496876684e4151304241674543415245774541594c4b6f5a496876684e4151304241674943415245774541594c4b6f5a496876684e0a4151304241674d43415149774541594c4b6f5a496876684e4151304241675143415151774541594c4b6f5a496876684e4151304241675543415145774551594c0a4b6f5a496876684e4151304241675943416743414d42414743797147534962345451454e41514948416745474d42414743797147534962345451454e415149490a416745414d42414743797147534962345451454e4151494a416745414d42414743797147534962345451454e4151494b416745414d42414743797147534962340a5451454e4151494c416745414d42414743797147534962345451454e4151494d416745414d42414743797147534962345451454e4151494e416745414d4241470a43797147534962345451454e4151494f416745414d42414743797147534962345451454e41514950416745414d42414743797147534962345451454e415149510a416745414d42414743797147534962345451454e415149524167454b4d42384743797147534962345451454e41514953424241524551494541594147414141410a41414141414141414d42414743697147534962345451454e41514d45416741414d42514743697147534962345451454e415151454267435162745541414441500a42676f71686b69472b45304244514546436745414d416f4743437147534d343942414d43413063414d455143494551625578385a6e79506d7442516b3474524c0a6d476f4e38304957366e55704637736144426e43334c6a48416941676d375a724e4c4348746656683979646e53634b6254365438546b357959527766484f65340a536b746936413d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436c7a4343416a36674177494241674956414e446f71747031312f6b7553526559504873555a644456386c6c4e4d416f4743437147534d343942414d430a4d476778476a415942674e5642414d4d45556c756447567349464e48574342536232393049454e424d526f77474159445651514b4442464a626e526c624342440a62334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e424d5173770a435159445651514745774a56557a4165467730784f4441314d6a45784d4451314d4468614677307a4d7a41314d6a45784d4451314d4468614d484578497a41680a42674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b4442464a626e526c0a6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e420a4d517377435159445651514745774a56557a425a4d424d4742797147534d34394167454743437147534d34394177454841304941424c39712b4e4d7032494f670a74646c31626b2f75575a352b5447516d38614369387a373866732b664b435133642b75447a586e56544154325a68444369667949754a77764e33774e427039690a484253534d4a4d4a72424f6a6762737767626777487759445652306a42426777466f4155496d554d316c71644e496e7a6737535655723951477a6b6e427177770a556759445652306642457377535442486f45576751345a426148523063484d364c79396a5a584a3061575a70593246305a584d7564484a316333526c5a484e6c0a636e5a705932567a4c6d6c75644756734c6d4e766253394a626e526c62464e4857464a76623352445153356a636d7777485159445652304f42425945464e446f0a71747031312f6b7553526559504873555a644456386c6c4e4d41344741315564447745422f77514541774942426a415342674e5648524d4241663845434441470a4151482f416745414d416f4743437147534d343942414d43413063414d45514349432f396a2b3834542b487a74564f2f734f5142574a6253642b2f327565784b0a342b6141306a6346424c63704169413364684d72463563443532743646714d764149706a385864476d79326265656c6a4c4a4b2b707a706352413d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436a6a4343416a53674177494241674955496d554d316c71644e496e7a6737535655723951477a6b6e42717777436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e4445784d566f5844544d7a4d4455794d5445774e4445784d466f77614445614d4267470a4131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e76636e4276636d46300a615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a42674e56424159540a416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a3044415163445167414543366e45774d4449595a4f6a2f69505773437a61454b69370a314f694f534c52466857476a626e42564a66566e6b59347533496a6b4459594c304d784f346d717379596a6c42616c54565978465032734a424b357a6c4b4f420a757a43427544416642674e5648534d4547444157674251695a517a575770303069664f44744a5653763141624f5363477244425342674e5648523845537a424a0a4d45656752614244686b466f64485277637a6f764c324e6c636e52705a6d6c6a5958526c63793530636e567a6447566b63325679646d6c6a5a584d75615735300a5a577775593239744c306c756447567355306459556d397664454e424c6d4e796244416442674e564851344546675155496d554d316c71644e496e7a673753560a55723951477a6b6e4271777744675944565230504151482f42415144416745474d42494741315564457745422f7751494d4159424166384341514577436759490a4b6f5a497a6a30454177494453414177525149675151732f30387279636450617543466b3855505158434d416c736c6f4265374e7761514754636470613045430a495143557438534776784b6d6a70634d2f7a3057503944766f3868326b3564753169574464426b416e2b306969413d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a0001000000000000000100000000000000100000000000000020000000000000007367785f7265706f72745f6461746100c801be0e15cdd5fdef828ec11b69551941f48aa200c17438d11286471c3e118c" }, "cda0fa96a7916caafd144ea4b3d4188b197cff605b32416a3b47c1c69aeff594": { "mrenclave": "8e67b83969dea1207c06fb5191bfd45662c196d030bed26796b75f09c0e1c4bc", "nodeId": "cda0fa96a7916caafd144ea4b3d4188b197cff605b32416a3b47c1c69aeff594", "quoteVersion": "OE_SGX_v1", "raw": "030002000000000005000a00939a7233f79c4ca9940a0db3957f060754a876d8093c9425005f2e6815d530010000000011110305ff80060000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000007000000000000008e67b83969dea1207c06fb5191bfd45662c196d030bed26796b75f09c0e1c4bc000000000000000000000000000000000000000000000000000000000000000056a35b461bd8042255f6d33ee5ce7afa34f7024a35b74f15c5808e0c00864226000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008e302cec2c9c0d898ea0824736115427df94d26cb51ebc0913ef0feaf0c37db9000000000000000000000000000000000000000000000000000000000000000034100000932a7fe206944a7f06a203b73c4d35ac6d53c490fc017f7568a6a577cb2255290f23021dc1a3deb6159be60bc6e43de50f7da2921f71163ecafe18bee73c01bb06834e14e82c9982eb6cee7471e3b13721661ece0a68458b0948b26ed53322b58dbf3252283ce9fe4703d59aff2003d8f94c5b61722eefd439c735d7e40b0e9a11110305ff800600000000000000000000000000000000000000000000000000000000000000000000000000000000001500000000000000070000000000000060d85af28be8d1c40a08d98b009d5f8acc1384a385cf460800e478791d1a979c00000000000000000000000000000000000000000000000000000000000000008c4f5775d796503e96137f77c68a829a0056ac8ded70140b081b094490c57bff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000751ade3621fe0e0e62fdfda76b32e7524bd87388a96e0a98ace244c95a8965b500000000000000000000000000000000000000000000000000000000000000000322ce315e71a60490bddf773f32b059f4cce7b435d550e2c1cd34aa7faf1cf4d06858ceb9ff5b8fa2aa9d3ba7a564c53853ca78ea6e1175e02b185f94ec4e852000000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f0500cc0d00002d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d49494567544343424365674177494241674956414c546d71796a394e4363724f414844654849486f6c754d565758464d416f4743437147534d343942414d430a4d484578497a416842674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b0a4442464a626e526c6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e560a4241674d416b4e424d517377435159445651514745774a56557a4165467730794d54417a4d6a4d774f544d304e546c61467730794f44417a4d6a4d774f544d300a4e546c614d484178496a416742674e5642414d4d47556c756447567349464e4857434251513073675132567964476c6d61574e6864475578476a415942674e560a42416f4d45556c756447567349454e76636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b470a413155454341774351304578437a414a42674e5642415954416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a304441516344516741450a715165687944707854673273444b6849772b64454f2b42647536527039586f516e6c3359322f6a32497455566e524374704236484c707943325a45614d6853610a4b716c6f436476715674426872504f7364377374474b4f434170737767674b584d42384741315564497751594d426141464e446f71747031312f6b75535265590a504873555a644456386c6c4e4d46384741315564487752594d465977564b42536f464347546d68306448427a4f693876595842704c6e527964584e305a57527a0a5a584a3261574e6c63793570626e526c6243356a62323076633264344c324e6c636e52705a6d6c6a5958527062323476646a497663474e7259334a7350324e680a5058427962324e6c63334e76636a416442674e5648513445466751552f724673795665793276384e58594e354178754c766177586868347744675944565230500a4151482f42415144416762414d41774741315564457745422f7751434d4141776767485542676b71686b69472b45304244514545676748464d494942775441650a42676f71686b69472b4530424451454242424132346f6d696e7451356a58772f325543756237766b4d4949425a41594b4b6f5a496876684e41513042416a43430a415651774541594c4b6f5a496876684e4151304241674543415245774541594c4b6f5a496876684e4151304241674943415245774541594c4b6f5a496876684e0a4151304241674d43415149774541594c4b6f5a496876684e4151304241675143415151774541594c4b6f5a496876684e4151304241675543415145774551594c0a4b6f5a496876684e4151304241675943416743414d42414743797147534962345451454e41514948416745474d42414743797147534962345451454e415149490a416745414d42414743797147534962345451454e4151494a416745414d42414743797147534962345451454e4151494b416745414d42414743797147534962340a5451454e4151494c416745414d42414743797147534962345451454e4151494d416745414d42414743797147534962345451454e4151494e416745414d4241470a43797147534962345451454e4151494f416745414d42414743797147534962345451454e41514950416745414d42414743797147534962345451454e415149510a416745414d42414743797147534962345451454e415149524167454b4d42384743797147534962345451454e41514953424241524551494541594147414141410a41414141414141414d42414743697147534962345451454e41514d45416741414d42514743697147534962345451454e415151454267435162745541414441500a42676f71686b69472b45304244514546436745414d416f4743437147534d343942414d43413067414d455543494252454b346b4c5559532b766149336436536d0a6668564f613642726d4c43316d50314b7265346f52456262416945416d78325a496f506f36584838303839576668746f6539356b6345733432507050343152370a643544467167513d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436c7a4343416a36674177494241674956414e446f71747031312f6b7553526559504873555a644456386c6c4e4d416f4743437147534d343942414d430a4d476778476a415942674e5642414d4d45556c756447567349464e48574342536232393049454e424d526f77474159445651514b4442464a626e526c624342440a62334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e424d5173770a435159445651514745774a56557a4165467730784f4441314d6a45784d4451314d4468614677307a4d7a41314d6a45784d4451314d4468614d484578497a41680a42674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b4442464a626e526c0a6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e420a4d517377435159445651514745774a56557a425a4d424d4742797147534d34394167454743437147534d34394177454841304941424c39712b4e4d7032494f670a74646c31626b2f75575a352b5447516d38614369387a373866732b664b435133642b75447a586e56544154325a68444369667949754a77764e33774e427039690a484253534d4a4d4a72424f6a6762737767626777487759445652306a42426777466f4155496d554d316c71644e496e7a6737535655723951477a6b6e427177770a556759445652306642457377535442486f45576751345a426148523063484d364c79396a5a584a3061575a70593246305a584d7564484a316333526c5a484e6c0a636e5a705932567a4c6d6c75644756734c6d4e766253394a626e526c62464e4857464a76623352445153356a636d7777485159445652304f42425945464e446f0a71747031312f6b7553526559504873555a644456386c6c4e4d41344741315564447745422f77514541774942426a415342674e5648524d4241663845434441470a4151482f416745414d416f4743437147534d343942414d43413063414d45514349432f396a2b3834542b487a74564f2f734f5142574a6253642b2f327565784b0a342b6141306a6346424c63704169413364684d72463563443532743646714d764149706a385864476d79326265656c6a4c4a4b2b707a706352413d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436a6a4343416a53674177494241674955496d554d316c71644e496e7a6737535655723951477a6b6e42717777436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e4445784d566f5844544d7a4d4455794d5445774e4445784d466f77614445614d4267470a4131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e76636e4276636d46300a615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a42674e56424159540a416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a3044415163445167414543366e45774d4449595a4f6a2f69505773437a61454b69370a314f694f534c52466857476a626e42564a66566e6b59347533496a6b4459594c304d784f346d717379596a6c42616c54565978465032734a424b357a6c4b4f420a757a43427544416642674e5648534d4547444157674251695a517a575770303069664f44744a5653763141624f5363477244425342674e5648523845537a424a0a4d45656752614244686b466f64485277637a6f764c324e6c636e52705a6d6c6a5958526c63793530636e567a6447566b63325679646d6c6a5a584d75615735300a5a577775593239744c306c756447567355306459556d397664454e424c6d4e796244416442674e564851344546675155496d554d316c71644e496e7a673753560a55723951477a6b6e4271777744675944565230504151482f42415144416745474d42494741315564457745422f7751494d4159424166384341514577436759490a4b6f5a497a6a30454177494453414177525149675151732f30387279636450617543466b3855505158434d416c736c6f4265374e7761514754636470613045430a495143557438534776784b6d6a70634d2f7a3057503944766f3868326b3564753169574464426b416e2b306969413d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a0001000000000000000100000000000000100000000000000020000000000000007367785f7265706f72745f6461746100cda0fa96a7916caafd144ea4b3d4188b197cff605b32416a3b47c1c69aeff594" } } }, [
    'content-length',
    '28866',
    'content-type',
    'application/json',
    'x-ms-ccf-transaction-id',
    '5.3389'
  ]);
