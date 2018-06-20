var form = `<form name="form1" action="?act=check" method="post" onsubmit="return chk(this);">
<div class="survey_set">
<div align="left"><span style="PADDING-RIGHT: 9px; margin-left:7px; PADDING-LEFT: 0px; FONT-WEIGHT: bold; FONT-SIZE: 20px; PADDING-BOTTOM: 9px; COLOR: #000000; LINE-HEIGHT: 45px; PADDING-TOP: 20px; FONT-STYLE: normal; FONT-FAMILY: 黑体; LETTER-SPACING: 3px; HEIGHT: 55px; ">新西兰技术移民基本加分(单选)</span><br>
</div>
<div class="survey_question_answer">
<div class="question">一、年龄:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="age" type="radio" value="0"> 未满20岁 <span class="STYLE2">0分</span><br>
<input name="age" type="radio" value="30"> 20~39岁 <span class="STYLE2">30分</span><br>
<input name="age" type="radio" value="20"> 40~44岁 <span class="STYLE2">20分</span><br>
<input name="age" type="radio" value="10"> 45~49岁 <span class="STYLE2">10分</span><br>
<input name="age" type="radio" value="5"> 50~55岁 <span class="STYLE2">5分</span></div>
</div>
</div>
<br>
<div class="survey_question_answer">
<div class="question">二、学历:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="xl_act" type="radio" value="1" onclick="Show('div2');Show('div5');"> 有学历
<input name="xl_act" type="radio" value="0" onclick="Hide('div2');Hide('div5');"> 没有学历
<div id="div2" style="display:none">
<span class="STYLE1">请选择:</span> <br>
<input name="xl" type="radio" value="40"> NZQF Level 3(LQEA) <span class="STYLE2">40分</span><br>
<input name="xl" type="radio" value="40"> NZQF Level 4~NZQF Level 6(技术证书~大学专科) <span class="STYLE2">40分</span><br>
<input name="xl" type="radio" value="50"> NZQF Level 7~NZQF Level 8(大学本科~研究生) <span class="STYLE2">50分</span><br>
<input name="xl" type="radio" value="70"> NZQF Level 9~NZQF Level 10(硕士学位~博士学位) <span class="STYLE2">70分</span><br>
</div>
</div>
</div>
</div>
<div class="survey_question_answer">
<div class="question">三、工作:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="job" type="radio" value="50" onclick="Show('div11');Show('div12');Show('div13');"> 持有一份新西兰技能工作邀请函(Job offer) 或 目前正在新西兰从事技能工作 <span class="STYLE2">50分</span><br>
<input name="job" type="radio" value="0" onclick="Hide('div11');Hide('div12');Hide('div13');"> 无新西兰工作 <span class="STYLE2">0分</span><br>
</div>
</div>
</div>
<br>
<div class="survey_question_answer">
<div class="question">四、工作经验<span class="STYLE1">(任何国家或地区)</span>:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="work_exp" type="radio" value="0" onclick="Hide('div7');Hide('div9');"> 无 <span class="STYLE2">0分</span><br>
<input name="work_exp" type="radio" value="10" onclick="Show('div7');Show('div9');"> 2年 <span class="STYLE2">10分</span><br>
<input name="work_exp" type="radio" value="20" onclick="Show('div7');Show('div9');"> 4年 <span class="STYLE2">20分</span><br>
<input name="work_exp" type="radio" value="30" onclick="Show('div7');Show('div9');"> 6年 <span class="STYLE2">30分</span><br>
<input name="work_exp" type="radio" value="40" onclick="Show('div7');Show('div9');"> 8年 <span class="STYLE2">40分</span><br>
<input name="work_exp" type="radio" value="50" onclick="Show('div7');Show('div9');"> 10年 <span class="STYLE2">50分</span><br>
</div>
</div>
</div>
<br>
</div>
<br>
<div class="survey_set">
<div align="left"><span style="PADDING-RIGHT: 9px; margin-left:7px; PADDING-LEFT: 0px; FONT-WEIGHT: bold; FONT-SIZE: 20px; PADDING-BOTTOM: 9px; COLOR: #000000; LINE-HEIGHT: 45px; PADDING-TOP: 20px; FONT-STYLE: normal; FONT-FAMILY: 黑体; LETTER-SPACING: 3px; HEIGHT: 55px; ">新西兰技术移民额外加分(多选) </span></div>
<div class="survey_question_answer">
<div class="question">五、配偶情况:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="pl_onoff" type="radio" value="0" onclick="Hide('div16');">
无配偶 或 配偶不满足英语要求
<input name="pl_onoff" type="radio" value="1" onclick="Show('div16');">
有配偶 且 配偶满足英语要求 <span class="STYLE2" style="font-size:12px;">Tip:配偶含未婚情侣关系及同性情侣关系</span><br>
<div id="div16" style="display:none">
<span class="STYLE1">请选择:</span> <br>
<input name="pl_xl" type="radio" value="10"> 配偶的最高学历为level 7~level 8(学士[本科]~研究生) <span class="STYLE2">10分</span><br>
<input name="pl_xl" type="radio" value="20"> 配偶的最高学历为level 9~level 10(硕士~博士) <span class="STYLE2">20分</span><br>
<input name="pl_job" type="checkbox" id="pl_job" value="20"> 配偶正在新西兰从事技能工作 或 持有新西兰的技能工作邀请函(Job offer) <span class="STYLE2">20分</span><br>
</div>
</div>
</div>
</div>
<br>
<div class="survey_question_answer">
<div class="question">六、紧缺职业属性<span class="STYLE1">(多选项)</span>: <span style="font-size: 12px;font-weight:normal;"><a href="http://www.jack-liu.com/post-85.html" target="_blank"><u>什么是紧缺职业?</u></a></span></div>
<div class="answer">
<div class="div_table_radio_question">
<div id="div7" style="display:">
<input name="jq_we" type="radio" value="0"> 无绝对紧缺职业的工作经验 <span class="STYLE2">0分</span><br>
<input name="jq_we" type="radio" value="10"> 拥有绝对紧缺职业的工作经验: 2年~5年 <span class="STYLE2">10分</span><br>
<input name="jq_we" type="radio" value="15"> 拥有绝对紧缺职业的工作经验: 6年或以上 <span class="STYLE2">15分</span><br>
</div>
<div id="div11" style="display:">
<input name="jq_offer" type="checkbox" id="jq_offer" value="10"> 持有绝对紧缺职业的新西兰工作邀请函(Job offer) 或 正在新西兰从事紧缺职业工作 <span class="STYLE2">10分</span><br>
</div>
</div>
</div>
</div>
<br>
<div id="div5" style="display:">
<div class="survey_question_answer">
<div class="question">七、新西兰本地学历属性:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="local_xl" type="radio" value="0"> 无新西兰本地学历 或 不符合以下条件 <span class="STYLE2">0分</span><br>
<input name="local_xl" type="radio" value="10"> 至少2年全日制学习获取的学士(level 7) <span class="STYLE2">10分</span><br>
<input name="local_xl" type="radio" value="10"> 1年全日制学习获取的研究生~博士(level 8~level 10) <span class="STYLE2">10分</span><br>
<input name="local_xl" type="radio" value="15"> 2年全日制学习获取的硕士~博士(level 9~level 10) <span class="STYLE2">15分</span><br>
</div>
</div>
</div>
<br>
</div>
<div id="div9" style="display:">
<div class="survey_question_answer">
<div class="question">八、新西兰本地工作经验属性:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="local_we" type="radio" value="0"> 无 <span class="STYLE2">0分</span><br>
<input name="local_we" type="radio" value="10"> 1年或以上 <span class="STYLE2">10分</span><br>
</div>
</div>
</div>
<br>
</div>
<div id="div12" style="display:">
<div class="survey_question_answer">
<div class="question">九、新西兰本地就业地点属性:</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="region" type="radio" value="0"> 当前的工作地点是在新西兰的奥克兰地区 <span class="STYLE2">0分</span><br>
<input name="region" type="radio" value="30"> 当前的工作地点是在新西兰的奥克兰地区以外 <span class="STYLE2">30分</span><br>
</div>
</div>
</div>
<br>
</div>

<div id="div13" style="display:">
<div class="survey_question_answer">
<div class="question">十、新西兰本地工作收入属性(高薪职位):</div>
<div class="answer">
<div class="div_table_radio_question">
<input name="local_hi" type="radio" value="0"> 时薪低于$46.98 <span class="STYLE2">0分</span><br>
<input name="local_hi" type="radio" value="20"> 时薪等于或大于$46.98 <span class="STYLE2">20分</span><br>
</div>
</div>
</div>
<br>
</div>


</div>
<br>
<div class="input_class"><input type="submit" name="submit" value=" 计 算 Input">&nbsp;&nbsp;<input type="reset" value=" 重 置 Reset" name="Submit"></div>
</form>`