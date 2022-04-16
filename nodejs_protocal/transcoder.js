class Transcoder{
    constructor(){
        this.packageHeaderLen = 4; // 包头长度
        this.serialNumber = 0; // 定义包序号
        this.packageSerialNumberLen = 2; // 包序列号所占用的字节
    }


    //之后定义两个函数分别进行编码和译码

    encode(data,serialNumber){
        const body = Buffer.from(data);                             // Buffer 可以将参数对象转化为二进制
        // const header = Buffer.alloc(this.packageSerialNumberLen);   // 但是这个样子有个问题就是不能确定长度是多少，解码的时候不好解读，如果一开始并没有定义长度的话
        const header = Buffer.alloc(this.packageHeaderLen);         //先分配出，这么固定长度的数组，然后进行写入
        header.writeInt16BE(serialNumber || this.serialNumber);
        header.writeInt16BE(body.length, this.packageSerialNumberLen); // 跳过包序列号的前两位

        if (serialNumber === undefined) {
            this.serialNumber++;
        }


        return Buffer.concat([header,body]);
    }



    // decode 就是将所传入的buffer，翻译成原本的内容
    decode(buffer){
        const header = buffer.slice(0,this.packageHeaderLen);
        const body = buffer.slice(this.packageHeaderLen);
        
    
        this.serialNumber ++ ;
        return{
            serialNumber: header.readInt16BE(),     //读取header的高十六位
            bodyLength: header.readInt16BE(this.packageSerialNumberLen), // 因为编码阶段写入时跳过了前两位，解码同样也要跳过
            body: body.toString(),
        }
    }




    getPackageLength(buffer) {
        if (buffer.length < this.packageHeaderLen) {
            return 0;
        }
    
        return this.packageHeaderLen + buffer.readInt16BE(this.packageSerialNumberLen);
    }
}

module.exports = Transcoder;