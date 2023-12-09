(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1243:function(s,n,a){s.exports=a.p+"assets/img/image-20230429234120661.99398030.png"},1244:function(s,n,a){s.exports=a.p+"assets/img/image-20230429234208060.9dc3179b.png"},1245:function(s,n,a){s.exports=a.p+"assets/img/image-20230429234321602.4121438b.png"},1246:function(s,n,a){s.exports=a.p+"assets/img/catch1.262bc081.jpg"},1247:function(s,n,a){s.exports=a.p+"assets/img/catch2.5e29ba94.jpg"},1248:function(s,n,a){s.exports=a.p+"assets/img/catch3.e3f2bb83.jpg"},1672:function(s,n,a){"use strict";a.r(n);var t=a(1),l=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"目的及环境"}},[s._v("目的及环境")]),s._v(" "),n("h3",{attrs:{id:"实验目的"}},[s._v("实验目的")]),s._v(" "),n("p",[s._v("了解模/数转换的基本原理，掌握ADC0809的使用方法")]),s._v(" "),n("p",[s._v("实验环境")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Tpc-zk-II")]),s._v("集成开发环境")]),s._v(" "),n("li",[s._v("微机原理与接口技术实验箱")])]),s._v(" "),n("h3",{attrs:{id:"实验原理"}},[s._v("实验原理")]),s._v(" "),n("p",[s._v("ADC0809延时法实验")]),s._v(" "),n("img",{attrs:{src:a(1243)}}),s._v(" "),n("p",[s._v("ADC0809查询法实验")]),s._v(" "),n("p",[s._v("按照下图进行连线，使用查询法，检测EOC状态。编程采集IN0输入的电压,在屏幕上显示出转换后的数据(用16进制数)")]),s._v(" "),n("img",{attrs:{src:a(1244)}}),s._v(" "),n("p",[s._v("ADC0809中断法实验")]),s._v(" "),n("img",{attrs:{src:a(1245)}}),s._v(" "),n("h2",{attrs:{id:"实验步骤及分析"}},[s._v("实验步骤及分析")]),s._v(" "),n("h3",{attrs:{id:"adc0809延时法实验"}},[s._v("ADC0809延时法实验")]),s._v(" "),n("p",[s._v("汇编代码")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data segment\nin0 equ 298h\ndata ends\ncode segment\nassume cs:code,ds:data\nstart:\n    mov ax,data\n    mov ds,ax\n    s1:\n    mov dx,in0\n    out dx,al\n    mov cx,0ffh\n    s:loop s\n    mov dx,in0\n    in al,dx\n    mov bl,al\n    mov cl,4\n    shr bl,cl\n    call disp\n    and al,0fh\n    mov bl,al\n    call disp\n    mov dl,20h\n    mov ah,2\n    int 21h\n    mov ah,1\n    int 16h\n    jz s1\n    mov ah,4ch\n    int 21h\n    \ndisp proc\n    push bx\n    push ax\n    push dx\n    mov dl,bl\n    cmp dl,9\n    jbe t\n    add dl,7\n    t:add dl,30h\n    mov ah,2\n    int 21h\n    pop dx\n    pop ax\n    pop bx\n    ret\ndisp endp\n    \ncode ends\nend start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("p",[s._v("实验现象：随着手动旋转旋钮，控制外部的计时器芯片的输出脉冲宽度，改变ADC0809内部的采样电容电压稳定时间，显示器输出"),n("code",[s._v("00-ff")])]),s._v(" "),n("ul",[n("li",[s._v("当计时器的输出脉冲宽度较小时，ADC0809内部的采电容电压稳定时间较短，此时转换速度会比较快，但是精度较低")]),s._v(" "),n("li",[s._v("当计时器的输出脉冲宽度逐渐增大时，ADC0809内部的采样电容电压稳定时间逐渐变长，此时转换速度逐渐变慢，但是精度逐渐提高")])]),s._v(" "),n("img",{attrs:{src:a(1246)}}),s._v(" "),n("h3",{attrs:{id:"adc0809查询法实验"}},[s._v("ADC0809查询法实验")]),s._v(" "),n("p",[s._v("汇编代码")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data segment\nin0 equ 298h\nioc equ 28ah\niok equ 28bh\ndata ends\ncode segment\nassume cs:code,ds:data\nstart:\n    mov ax,data\n    mov ds,ax\n    mov dx,iok\n    mov al,89h\n    out dx,al\n    s1:\n    mov dx,in0\n    out dx,al\n    readc:\n    mov dx,ioc\n    in al,dx\n    test al,00000001b\n    jz readc\n    mov dx,in0\n    in al,dx\n    mov bl,al\n    mov cl,4\n    shr bl,cl\n    call disp\n    and al,0fh\n    mov bl,al\n    call disp\n    mov dl,20h\n    mov ah,2\n    int 21h\n    mov ah,1\n    int 16h\n    jz s1\n    mov ah,4ch\n    int 21h\n    \ndisp proc\n    push bx\n    push ax\n    push dx\n    mov dl,bl\n    cmp dl,9\n    jbe t\n    add dl,7\n    t:add dl,30h\n    mov ah,2\n    int 21h\n    pop dx\n    pop ax\n    pop bx\n    ret\ndisp endp\n    \ncode ends\nend start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br")])]),n("p",[s._v("实验现象：随着手动旋转旋钮，控制外部的计时器芯片的输出脉冲宽度，改变ADC0809内部的采样电容电压稳定时间，显示器输出"),n("code",[s._v("00-ff")])]),s._v(" "),n("ul",[n("li",[s._v("查询周期对转换精度的影响。在实验过程中，当查询周期较小时，输出信号的精度会较低，即数字信号的误差会较大。当查询周期逐渐增大时，输出信号的精度会逐渐提高，即数字信号的误差会逐渐减小。当查询周期达到一定值之后，数字信号的精度不再有明显的提高，这是因为此时芯片内部的状态寄存器已经足够稳定，不受外界干扰，从而提高了精度")]),s._v(" "),n("li",[s._v("查询周期对转换速度的影响。在实验过程中，当查询周期较短时，转换速度会较快，即转换周期会较短。当查询周期逐渐增大时，转换速度会逐渐变慢，即转换周期会逐渐增长。但是，相对于延时法实验，查询法实验的转换速度一般比较稳定，不受延时时间的影响")])]),s._v(" "),n("img",{attrs:{src:a(1247)}}),s._v(" "),n("h3",{attrs:{id:"adc0809中断法实验"}},[s._v("ADC0809中断法实验")]),s._v(" "),n("p",[s._v("汇编代码")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DATA SEGMENT\nin0 equ 298h\nDATA ENDS\nCODE SEGMENT\nASSUME CS:CODE,DS:DATA\nSTART:\n    MOV AX,CS\n    MOV DS,AX\n    MOV DX,OFFSET INT3\n    MOV AX,250BH\n    INT 21H\n    IN AL,21H\n    AND AL,0F7H\n    OUT 21H,AL\n    MOV dx,in0\n    out dx,al\n    \nLL: JMP LL\nINT3: \n    MOV AX,DATA\n    MOV DS,AX\n    mov dx,in0\n    in al,dx\n    mov bl,al\n    mov cl,4\n    shr bl,cl\n    call disp\n    and al,0fh\n    mov bl,al\n    call disp\n    mov dl,20h\n    mov ah,2\n    int 21h\n    mov dx,in0\n    out dx,al\n        MOV AL,20H\n        OUT 20H,AL\n        IRET\ndisp proc\n    push bx\n    push ax\n    push dx\n    mov dl,bl\n    cmp dl,9\n    jbe t\n    add dl,7\n    t:add dl,30h\n    mov ah,2\n    int 21h\n    pop dx\n    pop ax\n    pop bx\n    ret\ndisp endp\n\nCODE ENDS\nEND START\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])]),n("p",[s._v("实验现象：随着手动旋转旋钮，控制外部的计时器芯片的输出脉冲宽度，改变ADC0809内部的采样电容电压稳定时间，显示器输出"),n("code",[s._v("00-ff")])]),s._v(" "),n("ul",[n("li",[s._v("转换精度和稳定性。使用中断法进行转换时，芯片内部会自动控制转换和输出数字信号，从而提高了转换的精度和稳定性，减小了干扰和误差。")]),s._v(" "),n("li",[s._v("转换速度。相对于查询法和延时法实验，中断法实验的转换速度更快，因为它可以自动进行转换和输出数字信号，无需人工干预和等待查询周期。")]),s._v(" "),n("li",[s._v("中断控制。在ADC0809中断法实验中，使用中断控制器来实现自动转换和输出数字信号，可以控制中断方式、中断优先级和中断响应等参数，从而满足不同应用需求。")])]),s._v(" "),n("img",{attrs:{src:a(1248)}}),s._v(" "),n("h2",{attrs:{id:"实验心得"}},[s._v("实验心得")]),s._v(" "),n("p",[s._v("经过本次实验，我熟悉了实验器材的使用方法和相关参数，包括模拟输入信号、模/数转换器0809芯片、示波器、稳压电源等，并且学会了设计和搭建相应的电路以及调试电路")])])}),[],!1,null,null,null);n.default=l.exports}}]);