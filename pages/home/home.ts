import {Component} from '@angular/core';
import {AlertController, App, LoadingController, NavController} from 'ionic-angular';
import {File} from "@ionic-native/file";
import {FileTransfer,FileTransferObject} from "@ionic-native/file-transfer";
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";
import {Camera, CameraOptions} from '@ionic-native/camera';
// import {TestPage} from "../test/test";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {Network} from "@ionic-native/network";
var that;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //测试用JSON
  JSONURL = "data:application/json;charset=utf-8,%5B%0A%20%20%7B%0A%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fqqe2.com1%22%2C%0A%20%20%20%20%22name%22%3A%20%22%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8JSON%E5%9C%A8%E7%BA%BF%E8%A7%A3%E6%9E%90%E7%BC%96%E8%BE%91%E5%99%A81%22%2C%0A%20%20%20%20%22array%22%3A%20%7B%0A%20%20%20%20%20%20%22JSON%E6%A0%A1%E9%AA%8C%22%3A%20%22http%3A%2F%2Fjsonlint.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22Cron%E7%94%9F%E6%88%90%22%3A%20%22http%3A%2F%2Fcron.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22JS%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%22%3A%20%22http%3A%2F%2Fedit.qqe2.com%2F%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22boolean%22%3A%20true%2C%0A%20%20%20%20%22null%22%3A%20null%2C%0A%20%20%20%20%22number%22%3A%201%2C%0A%20%20%20%20%22object%22%3A%20%7B%0A%20%20%20%20%20%20%22a%22%3A%20%22b%22%2C%0A%20%20%20%20%20%20%22c%22%3A%20%22d%22%2C%0A%20%20%20%20%20%20%22e%22%3A%20%22f%22%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fqqe2.com2%22%2C%0A%20%20%20%20%22name%22%3A%20%22%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8JSON%E5%9C%A8%E7%BA%BF%E8%A7%A3%E6%9E%90%E7%BC%96%E8%BE%91%E5%99%A82%22%2C%0A%20%20%20%20%22array%22%3A%20%7B%0A%20%20%20%20%20%20%22JSON%E6%A0%A1%E9%AA%8C%22%3A%20%22http%3A%2F%2Fjsonlint.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22Cron%E7%94%9F%E6%88%90%22%3A%20%22http%3A%2F%2Fcron.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22JS%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%22%3A%20%22http%3A%2F%2Fedit.qqe2.com%2F%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22boolean%22%3A%20true%2C%0A%20%20%20%20%22null%22%3A%20null%2C%0A%20%20%20%20%22number%22%3A%202%2C%0A%20%20%20%20%22object%22%3A%20%7B%0A%20%20%20%20%20%20%22a%22%3A%20%22b%22%2C%0A%20%20%20%20%20%20%22c%22%3A%20%22d%22%2C%0A%20%20%20%20%20%20%22e%22%3A%20%22f%22%0A%20%20%20%20%7D%0A%20%20%7D%2C%7B%0A%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fqqe2.com3%22%2C%0A%20%20%20%20%22name%22%3A%20%22%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8JSON%E5%9C%A8%E7%BA%BF%E8%A7%A3%E6%9E%90%E7%BC%96%E8%BE%91%E5%99%A83%22%2C%0A%20%20%20%20%22array%22%3A%20%7B%0A%20%20%20%20%20%20%22JSON%E6%A0%A1%E9%AA%8C%22%3A%20%22http%3A%2F%2Fjsonlint.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22Cron%E7%94%9F%E6%88%90%22%3A%20%22http%3A%2F%2Fcron.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22JS%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%22%3A%20%22http%3A%2F%2Fedit.qqe2.com%2F%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22boolean%22%3A%20true%2C%0A%20%20%20%20%22null%22%3A%20null%2C%0A%20%20%20%20%22number%22%3A%203%2C%0A%20%20%20%20%22object%22%3A%20%7B%0A%20%20%20%20%20%20%22a%22%3A%20%22b%22%2C%0A%20%20%20%20%20%20%22c%22%3A%20%22d%22%2C%0A%20%20%20%20%20%20%22e%22%3A%20%22f%22%0A%20%20%20%20%7D%0A%20%20%7D%2C%7B%0A%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fqqe2.com4%22%2C%0A%20%20%20%20%22name%22%3A%20%22%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8JSON%E5%9C%A8%E7%BA%BF%E8%A7%A3%E6%9E%90%E7%BC%96%E8%BE%91%E5%99%A84%22%2C%0A%20%20%20%20%22array%22%3A%20%7B%0A%20%20%20%20%20%20%22JSON%E6%A0%A1%E9%AA%8C%22%3A%20%22http%3A%2F%2Fjsonlint.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22Cron%E7%94%9F%E6%88%90%22%3A%20%22http%3A%2F%2Fcron.qqe2.com%2F%22%2C%0A%20%20%20%20%20%20%22JS%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%22%3A%20%22http%3A%2F%2Fedit.qqe2.com%2F%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22boolean%22%3A%20true%2C%0A%20%20%20%20%22null%22%3A%20null%2C%0A%20%20%20%20%22number%22%3A%204%2C%0A%20%20%20%20%22object%22%3A%20%7B%0A%20%20%20%20%20%20%22a%22%3A%20%22b%22%2C%0A%20%20%20%20%20%20%22c%22%3A%20%22d%22%2C%0A%20%20%20%20%20%20%22e%22%3A%20%22f%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%5D"
  //存储JSON
  listData=[];
  fileContent;
  // 控制闪光灯
  light: boolean = false;
  // 控制摄像头前后
  frontCamera: boolean = false;
  barcodeData;
  //照片路径
  i=0;
  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController,public alertCtrl:AlertController,
              public file:File,public fileTransfer:FileTransfer,public app:App,public barcodeScanner:BarcodeScanner,
              public camera: Camera,public photoViewer:PhotoViewer,public network: Network) {
    that=this;
    this.light=false;
    this.frontCamera=false;
    this.listData=[];
  }
  ionViewDidLoad() {

  }
  //下载、存储、读取文件
  ceshi(){
    const fileTransferNow: FileTransferObject = this.fileTransfer.create();
    //读取进度条
    let loading = this.loadingCtrl.create({
      content:"下载进度：0%",
      dismissOnPageChange:false
    });
    loading.present();

    let  now: number = 0;

    fileTransferNow.onProgress(progressEvent=>{
      // alert(progressEvent.lengthComputable);
      if (progressEvent.lengthComputable){
        now = progressEvent.loaded/progressEvent.total*100;
      }
    });
    let timer = setInterval(()=>{
      loading.setContent("下载进度："+Math.floor(now)+"%");
      if (now >= 99){
        clearInterval(timer);
      }
    },300);
    //android 存储externalDataDirectory,同用沙盒存储dataDirectory
    fileTransferNow.download(this.JSONURL,
      this.file.externalDataDirectory+"test").then((entry)=>{
      alert(JSON.stringify(entry));
      if (timer) clearInterval(timer);
      loading.dismiss();
      alert("下载成功");
      //只能读取.txt
      entry.file((file)=>{
        var reader = new FileReader();
        reader.onloadend=(e)=>{
          this.fileContent=e.target['result'];
          this.listData=JSON.parse(this.fileContent);
        };
        reader.readAsText(file);
      })

    },(error)=>{
      alert("下载失败,error："+JSON.stringify(error));
      loading.dismiss();
    })
  }
  xia(item){

  }
  sao(){
    this.scan();
    // this.app.getRootNav().push(ScannerTestPage);
  }
  //扫码
  scan() {
    let options: BarcodeScannerOptions = {
      preferFrontCamera: false,//前置摄像头
      showFlipCameraButton: true,//翻转摄像头按钮
      showTorchButton: true,//闪关灯按钮
      prompt: '扫描中……',//提示文本
      // formats: 'QR_CODE',//格式
      orientation: 'portrait',//方向
      torchOn: false,//启动闪光灯
      resultDisplayDuration: 500,//显示扫描文本
      disableSuccessBeep: true // iOS and Android
    };
    this.barcodeScanner
      .scan(options)
      .then((data) => {
        this.barcodeData = data;
        const alert = this.alertCtrl.create({
          title: 'Scan Results',
          subTitle: data.text,
          buttons: ['OK']
        });
        alert.present();
      })
      .catch((err) => {
        const alert = this.alertCtrl.create({
          title: 'Attention!',
          subTitle: err,
          buttons: ['Close']
        });
        alert.present();
      });
  }
  //拍照
  openCamera() {
    const options: CameraOptions = {
      quality: 50,                                                   //相片质量 0 -100
      destinationType: this.camera.DestinationType.FILE_URI,        //DATA_URL 是 base64   FILE_URL 是文件路径
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,                                       //是否保存到相册
      sourceType: this.camera.PictureSourceType.CAMERA ,         //是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.resolveUri(imageData).then(url=>{
        url.file((file)=>{
          let reader = new FileReader();
          reader.onloadend=(e)=>{
            let node = document.getElementById("imgBox");
            let base64Image=e.target['result'];
            let div = document.createElement("div");
            div.className = "imgInclusion";
            div.innerHTML+=
              "<img id=\"i"+this.i+"\" name=\"i"+this.i+"\" class=\"imgShow\" src=\""+base64Image+"\">" +
              "<img id=\"b"+this.i+"\" class=\"imgDeleteButton\" src='assets/imgs/delete.png'>";
            node.appendChild(div);
            document.getElementById("i"+that.i).onclick=function() {
              try {
                that.photoViewer.show(imageData)
              } catch (e) {
                alert(e)
              }
            };
            document.getElementById("b"+that.i).onclick=function(){
              try {
                node.removeChild(div);
              }catch(e) {
                alert(e)
              }
            };
            this.i++;
          };
          reader.readAsDataURL(file);
        },err=>{
          alert(err)
        });
      },err=>{
        alert(err)
      })
    }, (err) => {
      // Handle error
      alert(err)
    });
  }
  //图库
  xuantu(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.resolveUri(imageData).then(url=>{
        url.file((file)=>{
          let reader = new FileReader();
          reader.onloadend=(e)=>{
            let node = document.getElementById("imgBox");
            let base64Image=e.target['result'];
            let div = document.createElement("div");
            div.className = "imgInclusion";
            div.innerHTML+=
              "<img id=\"i"+this.i+"\" name=\"i"+this.i+"\" class=\"imgShow\" src=\""+base64Image+"\">" +
              "<img id=\"b"+this.i+"\" class=\"imgDeleteButton\" src='assets/imgs/delete.png'>";
            node.appendChild(div);
            document.getElementById("i"+that.i).onclick=function() {
              try {
                that.photoViewer.show(imageData)
              } catch (e) {
                alert(e)
              }
            };
            document.getElementById("b"+that.i).onclick=function(){
              try {
                node.removeChild(div);
              }catch(e) {
                alert(e)
              }
            };
            this.i++;
          };
          reader.readAsDataURL(file);
        },err=>{
          alert(err)
        });
      },err=>{
        alert(err)
      })
    }, (err) => {
      // Handle error
      alert(err)
    });
  }
  //转换url
  resolveUri(uri:string):Promise<any>{
    return new Promise((resolve, reject) => {
      this.file.resolveLocalFilesystemUrl(uri).then(filePath =>{
        resolve(filePath);
      }).catch(err =>{
        reject(err);
      });
    })
  }
  cewang(){
    if (this.network.type == 'none') {
      alert("断网了！！！")
    }else {
      alert("网络连接正常")
    }
  }
  ce(){

  }
}
