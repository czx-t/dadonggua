// version v0.0.1
// create by ruicky
// detail url: https://github.com/ruicky/jd_sign_bot
/*

　BBC2历史电视电影系列《空王冠》（The Hollow Crown）4部经典莎士比亚作品的新演绎，分别是：《理查二世》（Richard II）、《亨利四世：第一部》（Henry IV, Part 1）、《亨利四世：第二部》（Henry IV, Part 2）和《亨利五 世》（Henry V）。在2012年伦敦奥运会期间，为了向全世界展现英国文化，这四部电视电影将作为伦敦文化奥运的重点推荐剧目向全世界推行，在2012年6月播出。　　《亨利四世》是该系列的第二部。夺取理查二世权势的亨利四世，将由奥斯卡影帝杰瑞米·艾恩斯 Jeremy Irons饰演，将由《丑闻纪事》的导演理查德·艾尔掌镜，在《复仇者联盟》中雷神弟弟“洛基”汤姆·希德勒斯顿 Tom Hiddleston将饰演Prince Hal，西蒙·拉塞尔·比尔 Simon Russell Beale饰演约翰·福斯塔夫爵士，艾伦·阿姆斯特朗 Alun Armstrong饰演诺森伯兰伯爵。　　《亨利四世》展现了英国中世纪时期迷人的历史，并将演绎出近年来最野心勃勃的一部莎士比亚改编作品。《亨利四世》是莎士比亚历史剧中最成功、最受欢迎的一部，被看成莎士比亚历史剧的代表作。这部作品的主要内容是反映亨利四世和他的王子们与反叛的诸侯贵族进行殊死斗争的过程。莎士比亚突破传统历史剧多条线索交织发展的网状结构，采用了两条线索平行发展的结构——以亨利四世为代表的宫廷生活线索和以福斯塔夫为代表的市井生活线索。


《岁月楼情》，香港电视网络所制作的时装论理电视剧，由黄日华、关宝慧、夏雨、鲍起静、唐宁、林利、曾伟权及姜皓文领衔主演；此剧暂定为2013香港电视网络开台重头台庆剧。汇聚视帝影后级实力派演员，演活一个以公共屋邨作为背景，横跨近30年的故事。见证小人物凭著坚韧、拼搏、永不放弃的狮子山下精神，历尽大雨狂风，建立一个安稳的家。同一天空下，广厦万户人家，只要在健康快乐的安稳的家里出发，每个人都会踏出充实而灿烂的人生，而在时间的洪流里，留下每个人的足迹，见证百样人的故事。

　The tempo of modern civilization has been much quickened in the last twenty years。 While witnessing the dramatic changes in the better-off society， people begin to reconsider the question of "survival"。 "Survival" in the old sense does not bother us anymore。 Instead， we are more concerned about how to "survive" in the human world full of petition。

　　Competition always carries abreast challenges and opportunities to everyone involved。 It might appear in an entrance exam， in a regular class， or in a small public speech。 Those who fail to detect its real nature-whether an opportunity or a challenge a petition really is- will lose something more or less conducive to our growth。 Of course， if we take the petition as an opportunity， we will favor it intentionally because they can help us outstand from the average; they will make us bee the focus of public attention; they will grant us more chances and rights to succeed。 As a matter of fact， opportunities are supposed to be more perceptible and weling than challenges。 The truth is， however， we will lose more opportunities when we choose to take the "opportunity" fork at the crossroads。 The other fork， ignored by us and defined as "fearful challenges"， offers much more chances for the walker in petition。

　　We have such an inclination in life to overestimate ourselves and hold a thoughtless attitude towards the negative outlook of things。

　　We believe in the old saying， "Opportunity knocks but just once，" so we always wele it and devote all our spirit and efforts to it。 The most devout believer of this saying are the graduates。 Why? There are quite a number of them who pay full attention to positions in big cities and are willing to flood into developed areas under any circumstances， even though there will be too much uncertainty for their choices。 Innumerable cases go straight to the same miserable end: God seems to refuse to help too many of His worshipers。

　　In conclusion， to define the quuality of petition seems to be far from valuable sense， for no matter what a petition is， an opportunity or a challenge， it will create nutritious elements for our growth。

　　So take a positive look at everything around。 Keep our face to the sunshine， and we will not see the shadows。


*/
const exec = require("child_process").execSync;
const fs = require("fs");
const download = require("download");


const JD_COOKIE = process.env.JD_COOKIE; //
const SyncUrl = process.env.SYNCURL; //
const Efork = process.env.EFORK; //
const BARK_PUSH = process.env.BARK_PUSH; //
const PUSH_KEY = process.env.PUSH_KEY; //
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN; //
const TG_USER_ID = process.env.TG_USER_ID; //









let CookieJDs = [];
 let hcodestr="";
let shareCodes=[];
async function downFile() {
   
    await download(SyncUrl, "./",{filename:'temp.js'});
}

async function changeFiele(content, cookie) {

     let newContent = content.replace("require('./jdCookie.js')", JSON.stringify({ CookieJD: cookie }));
     
     newContent = content.replace(`require("./jdCookie.js")`, JSON.stringify({ CookieJD: cookie }));
     
     newContent = content.replace(`require('./jdCookie.js')`, JSON.stringify({ CookieJD: cookie }));
          
     newContent = newContent.replace(Efork,'Efork');
    //await fs.writeFileSync("./Ponysitters_Club_Season.js", newContent, "utf8");
     
newContent = newContent.replace(/require\('.\/(\w+)ShareCodes.js\'\)/g, JSON.stringify(shareCodes)); 


    
     await fs.writeFileSync( './temp.js', newContent, 'utf8')
    
}

async function executeOneByOne() {
    const content = await fs.readFileSync("./temp.js", "utf8");
    for (var i = 0; i < CookieJDs.length; i++) {
        console.log(`正在执行第${i + 1}个账号签到任务`);
        changeFiele(content, CookieJDs[i]);
        console.log("替换变量完毕");    //await exec("node Ponysitters_Club_Season.js >> result.txt", { stdio: "inherit" });
        await exec("node temp.js >> result.txt");
       
    }
}

async function start() {
    if (!JD_COOKIE) {
        
        return;
    }
   if (!SyncUrl) {
     
        return;
    }
    if (!Efork) {
     
        return;
    }
  
 console.log('SyncUrl'+SyncUrl)
   if (SyncUrl) {
   if (SyncUrl.indexOf(".js")>0) {
     hcodestr=SyncUrl.substr(SyncUrl.indexOf(".js")-4,4)+"_CODE";   }

}
 
  console.log('hcodestr'+hcodestr)
 if (hcodestr && process.env[hcodestr]) {
  if (process.env[hcodestr].indexOf('&')>-1)
      shareCodes=(process.env[hcodestr]).split('&');
   else if (process.env[hcodestr].indexOf('@')>-1)  
     shareCodes=(process.env[hcodestr]).split('@');
  else
   shareCodes=process.env[hcodestr];
}  
 console.log("你的互助码:"+JSON.stringify(shareCodes))
     
     
    CookieJDs = JD_COOKIE.split("&");
    console.log(`当前共${CookieJDs.length}个账号需要签到`);
    
    await downFile();
  
    await executeOneByOne();
    const path = "./result.txt";
    let content = "";
    if (fs.existsSync(path)) {
      content = fs.readFileSync(path, "utf8");
    }
     
    console.log(content);
    console.log("全部执行完毕");
}

start();
