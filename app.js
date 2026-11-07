const eras = [
  {
    label: 'CUỐI THẾ KỈ XIX – NĂM 1920', title: 'Khởi đầu một hành trình mới',
    lead: 'Phong trào chuyển dần từ đấu tranh tự vệ sang đấu tranh giải phóng dân tộc. Khuynh hướng tư sản nổi lên, trong khi các hình thức đấu tranh ngày càng đa dạng.',
    key: 'Chuyển tiếp và tìm đường',
    facts: [
      {date:'1896', title:'Phi-líp-pin', text:'Cuộc khởi nghĩa chống thực dân Tây Ban Nha là ví dụ tiêu biểu của khuynh hướng tư sản trong giai đoạn này.'},
      {date:'Đầu TK XX', title:'In-đô-nê-xi-a', text:'Phong trào dân tộc tiếp tục mở rộng; các tổ chức mới tập hợp thêm nhiều tầng lớp tham gia.'},
      {date:'Trước 1920', title:'Toàn khu vực', text:'Sự phát triển của giai cấp công nhân tạo cơ sở cho một khuynh hướng đấu tranh mới về sau.'}
    ], cue:'Mẹo nhớ: Từ chống xâm lược → tìm con đường giải phóng dân tộc.'
  },
  {
    label: 'TỪ NĂM 1920 ĐẾN NĂM 1945', title: 'Một khuynh hướng mới xuất hiện',
    lead: 'Giai cấp vô sản bắt đầu tham gia đời sống chính trị. Một số đảng cộng sản ra đời, làm phong trào giải phóng dân tộc có thêm lực lượng và đường hướng tổ chức.',
    key: 'Khuynh hướng vô sản xuất hiện',
    facts: [
      {date:'1920', title:'In-đô-nê-xi-a', text:'Đảng Cộng sản In-đô-nê-xi-a ra đời.'},
      {date:'1930', title:'Việt Nam', text:'Đảng Cộng sản Việt Nam thành lập ngày 3/2/1930.'},
      {date:'Thập niên 1930', title:'Một số nước khác', text:'Đảng cộng sản được thành lập ở Mã Lai, Xiêm và Phi-líp-pin; khuynh hướng vô sản phát triển bên cạnh các khuynh hướng khác.'}
    ], cue:'Mẹo nhớ: 1920 mở chặng → các chính đảng mới xuất hiện → phong trào có thêm hướng đi.'
  },
  {
    label: 'TỪ NĂM 1945 ĐẾN NĂM 1975', title: 'Làn sóng độc lập dâng cao',
    lead: 'Chiến tranh thế giới thứ hai kết thúc tạo thời cơ. Nhiều nước tuyên bố hoặc được trao trả độc lập, nhưng cuộc đấu tranh bảo vệ chủ quyền và hoàn tất giải phóng còn kéo dài.',
    key: 'Giành, giữ và củng cố độc lập',
    facts: [
      {date:'1945', title:'In-đô-nê-xi-a · Việt Nam · Lào', text:'Trong năm 1945, ba nước tuyên bố độc lập sau những diễn biến lịch sử khác nhau.'},
      {date:'1946–1957', title:'Phi-líp-pin · Miến Điện · Mã Lai', text:'Phi-líp-pin được trao trả độc lập năm 1946; Miến Điện độc lập năm 1948; Liên bang Mã Lai độc lập năm 1957.'},
      {date:'1975', title:'Ba nước Đông Dương', text:'Những thắng lợi quan trọng khép lại một chặng đấu tranh dài ở Việt Nam, Lào và Cam-pu-chia.'}
    ], cue:'Mẹo nhớ: Tuyên bố độc lập chưa đồng nghĩa mọi thách thức về chủ quyền đã kết thúc.'
  }
];

const panels = document.getElementById('eraPanels');
panels.innerHTML = eras.map((era, index) => `<article class="era-panel${index===0?' active':''}" id="panel-${index}" role="tabpanel" aria-labelledby="tab-${index}" ${index?'hidden':''}><div class="era-feature"><span class="era-label">CHẶNG 0${index+1} · ${era.label}</span><h3>${era.title}</h3><p>${era.lead}</p><span class="era-word">TỪ KHÓA CỦA CHẶNG<strong>${era.key}</strong></span></div><div class="era-facts"><h4>ĐIỂM NEO LỊCH SỬ</h4>${era.facts.map(f=>`<div class="fact"><time>${f.date}</time><p><strong>${f.title}</strong>${f.text}</p></div>`).join('')}<div class="era-cue"><b>GHI NHỚ</b> · ${era.cue}</div></div></article>`).join('');

const tabs = [...document.querySelectorAll('.era-tabs [role="tab"]')];
function selectEra(index, scroll=false){
  tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});
  [...panels.children].forEach((panel,i)=>{panel.hidden=i!==index;panel.classList.toggle('active',i===index)});
  if(scroll) document.getElementById('hanh-trinh').scrollIntoView({behavior:'smooth',block:'start'});
}
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>selectEra(Number(tab.dataset.era)));
  tab.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();const current=Number(tab.dataset.era);const next=e.key==='Home'?0:e.key==='End'?2:(current+(e.key==='ArrowRight'?1:2))%3;selectEra(next);tabs[next].focus()});
});
document.querySelectorAll('.chapter-card').forEach(card=>card.addEventListener('click',()=>selectEra(Number(card.dataset.era),true)));

const countries = [
  {id:'mm',name:'Mi-an-ma',type:'ĐÔNG NAM Á LỤC ĐỊA',text:'Hiệp ước Anh–Miến được kí năm 1947. Miến Điện chính thức độc lập ngày 4/1/1948. Hai mốc này chỉ hai sự kiện khác nhau.'},
  {id:'th',name:'Thái Lan',type:'ĐÔNG NAM Á LỤC ĐỊA',text:'Xiêm (Thái Lan) không trở thành thuộc địa của phương Tây. Quốc gia này là trường hợp riêng khi so sánh con đường giữ chủ quyền trong khu vực.'},
  {id:'la',name:'Lào',type:'ĐÔNG NAM Á LỤC ĐỊA',text:'Lào tuyên bố độc lập tháng 10/1945, sau đó tiếp tục đấu tranh. Ngày 2/12/1975, nước Cộng hòa Dân chủ Nhân dân Lào thành lập.'},
  {id:'kh',name:'Cam-pu-chia',type:'ĐÔNG NAM Á LỤC ĐỊA',text:'Nhân dân Cam-pu-chia kháng chiến chống thực dân Pháp, rồi tiếp tục trải qua biến động và đấu tranh trong những thập niên sau.'},
  {id:'vn',name:'Việt Nam',type:'ĐÔNG NAM Á LỤC ĐỊA',text:'Cách mạng tháng Tám năm 1945 thành công; ngày 2/9/1945, Việt Nam tuyên bố độc lập. Cuộc đấu tranh bảo vệ độc lập và thống nhất tiếp tục đến năm 1975.'},
  {id:'my',name:'Ma-lai-xi-a',type:'ĐÔNG NAM Á HẢI ĐẢO & BÁN ĐẢO',text:'Liên bang Mã Lai giành độc lập năm 1957 qua quá trình đấu tranh và đàm phán. Liên bang Ma-lai-xi-a được thành lập năm 1963.'},
  {id:'sg',name:'Xin-ga-po',type:'ĐẢO QUỐC',text:'Xin-ga-po trở thành quốc gia độc lập năm 1965. Đây là mốc bổ trợ để so sánh với các con đường giành độc lập khác trong khu vực.'},
  {id:'id',name:'In-đô-nê-xi-a',type:'ĐÔNG NAM Á HẢI ĐẢO',text:'Tuyên bố độc lập ngày 17/8/1945. Sau đó, In-đô-nê-xi-a tiếp tục đấu tranh quân sự và ngoại giao để bảo vệ nền độc lập.'},
  {id:'bn',name:'Bru-nây',type:'ĐÔNG NAM Á HẢI ĐẢO',text:'Bru-nây được trao trả độc lập năm 1984. Đây là ngoại lệ sau mốc kết thúc 1975 của sơ đồ ba giai đoạn trong bài học.'},
  {id:'ph',name:'Phi-líp-pin',type:'ĐÔNG NAM Á HẢI ĐẢO',text:'Cuộc khởi nghĩa năm 1896 chống thực dân Tây Ban Nha là mốc tiêu biểu. Phi-líp-pin được Hoa Kỳ trao trả độc lập năm 1946.'},
  {id:'tl',name:'Đông Ti-mo',type:'ĐÔNG NAM Á HẢI ĐẢO',text:'Đông Ti-mo hiện là một quốc gia Đông Nam Á. Tiến trình độc lập của nước này nằm ngoài khung ba giai đoạn kết thúc năm 1975 trong Bài 6.'}
];
const countryPills=document.getElementById('countryPills');
countryPills.innerHTML=countries.map(c=>`<button type="button" data-country="${c.id}">${c.name}</button>`).join('');
function selectCountry(id){const c=countries.find(x=>x.id===id);if(!c)return;document.getElementById('countryName').textContent=c.name;document.getElementById('countryText').textContent=c.text;document.getElementById('countryType').textContent=c.type;document.querySelectorAll('[data-country]').forEach(el=>el.classList.toggle('active',el.dataset.country===id))}
countryPills.addEventListener('click',e=>{const button=e.target.closest('button[data-country]');if(button)selectCountry(button.dataset.country)});
const mapStage=document.querySelector('.map-stage');
mapStage.addEventListener('click',e=>{const shape=e.target.closest('svg [data-country]');if(shape)selectCountry(shape.dataset.country)});
mapStage.querySelectorAll('svg [data-country]').forEach(shape=>{shape.setAttribute('tabindex','0');shape.setAttribute('role','button');const c=countries.find(x=>x.id===shape.dataset.country);shape.setAttribute('aria-label',`Xem thông tin ${c?.name||'quốc gia'}`);shape.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectCountry(shape.dataset.country)}})});
selectCountry('vn');

const quiz=[
  {q:'Sơ đồ trong SGK chia hành trình giành độc lập của Đông Nam Á thành mấy giai đoạn?',a:['2 giai đoạn','3 giai đoạn','4 giai đoạn'],correct:1,why:'SGK chia thành ba chặng: cuối thế kỉ XIX–1920, 1920–1945 và 1945–1975.'},
  {q:'Sự kiện nào tiêu biểu cho khuynh hướng tư sản cuối thế kỉ XIX?',a:['Khởi nghĩa Phi-líp-pin năm 1896','Miến Điện độc lập năm 1948','Mã Lai độc lập năm 1957'],correct:0,why:'Cuộc khởi nghĩa chống Tây Ban Nha ở Phi-líp-pin năm 1896 là ví dụ SGK nêu.'},
  {q:'Điểm mới nổi bật của giai đoạn 1920–1945 là gì?',a:['Không còn đấu tranh chính trị','Khuynh hướng vô sản xuất hiện','Mọi nước đều độc lập'],correct:1,why:'Giai cấp vô sản bước lên vũ đài chính trị và một số đảng cộng sản ra đời.'},
  {q:'Quốc gia nào tuyên bố độc lập trong năm 1945?',a:['Liên bang Mã Lai','Miến Điện','In-đô-nê-xi-a'],correct:2,why:'In-đô-nê-xi-a tuyên bố độc lập ngày 17/8/1945.'},
  {q:'Ngày 4/1/1948 gắn với sự kiện nào?',a:['Miến Điện chính thức độc lập','Kí hiệp ước Anh–Miến','Phi-líp-pin độc lập'],correct:0,why:'Hiệp ước Anh–Miến kí năm 1947; ngày độc lập chính thức là 4/1/1948.'},
  {q:'Vì sao tuyên bố độc lập chưa phải là điểm kết thúc ở nhiều nước?',a:['Vì còn phải bảo vệ chủ quyền và củng cố nền độc lập','Vì chưa có bản đồ','Vì không có phong trào quần chúng'],correct:0,why:'Nhiều quốc gia còn tiếp tục đấu tranh quân sự, ngoại giao và xây dựng đất nước sau tuyên bố độc lập.'}
];
let quizIndex=0,score=0,answered=false;
const qCounter=document.getElementById('quizCounter'),qScore=document.getElementById('quizScore'),qProgress=document.getElementById('quizProgress'),qQuestion=document.getElementById('quizQuestion'),qOptions=document.getElementById('quizOptions'),qFeedback=document.getElementById('quizFeedback'),qNext=document.getElementById('quizNext');
function renderQuiz(){answered=false;const item=quiz[quizIndex];qCounter.textContent=`CÂU ${String(quizIndex+1).padStart(2,'0')} / ${String(quiz.length).padStart(2,'0')}`;qScore.textContent=`ĐÚNG ${score}`;qProgress.style.width=`${(quizIndex+1)/quiz.length*100}%`;qQuestion.textContent=item.q;qOptions.innerHTML=item.a.map((answer,i)=>`<button type="button" data-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${answer}</button>`).join('');qFeedback.textContent='';qNext.hidden=true;qNext.textContent=quizIndex===quiz.length-1?'Xem kết quả →':'Câu tiếp theo →'}
qOptions.addEventListener('click',e=>{const btn=e.target.closest('button[data-answer]');if(!btn||answered)return;answered=true;const item=quiz[quizIndex],chosen=Number(btn.dataset.answer);if(chosen===item.correct)score++;qScore.textContent=`ĐÚNG ${score}`;qOptions.querySelectorAll('button').forEach((button,i)=>{button.disabled=true;if(i===item.correct)button.classList.add('correct');else if(i===chosen)button.classList.add('incorrect')});qFeedback.textContent=`${chosen===item.correct?'Chính xác!':'Chưa đúng.'} ${item.why}`;qNext.hidden=false});
qNext.addEventListener('click',()=>{if(quizIndex<quiz.length-1){quizIndex++;renderQuiz()}else{qCounter.textContent='HOÀN THÀNH';qProgress.style.width='100%';qQuestion.textContent='Bạn đã hoàn thành thử thách!';qOptions.innerHTML=`<div class="quiz-result"><strong>${score}/${quiz.length}</strong><p>${score===quiz.length?'Xuất sắc! Bạn đã nắm chắc trục lịch sử.':'Hãy xem lại các chặng rồi thử thêm một lượt nhé.'}</p><button class="btn btn-primary" type="button" id="retryQuiz">Làm lại ↻</button></div>`;qFeedback.textContent='';qNext.hidden=true;document.getElementById('retryQuiz').addEventListener('click',()=>{quizIndex=0;score=0;renderQuiz()})}});renderQuiz();

const slides=[
  {k:'CÂU CHUYỆN MỞ ĐẦU',h:'Một khu vực.<br><em>Muôn con đường.</em>',p:'Các dân tộc Đông Nam Á đã đi từ chống xâm lược đến giành và bảo vệ độc lập như thế nào?',tags:['LỊCH SỬ 11','BÀI 6']},
  {k:'CHẶNG 01 · CUỐI TK XIX – 1920',h:'Khởi đầu',p:'Đấu tranh tự vệ dần chuyển sang giải phóng dân tộc. Cuộc khởi nghĩa Phi-líp-pin năm 1896 là mốc tiêu biểu của khuynh hướng tư sản.',tags:['1896 · PHI-LÍP-PIN','NHIỀU HÌNH THỨC ĐẤU TRANH']},
  {k:'CHẶNG 02 · 1920 – 1945',h:'Chuyển hướng',p:'Giai cấp vô sản bước lên vũ đài chính trị. Một số đảng cộng sản ra đời, mở thêm khuynh hướng mới trong phong trào.',tags:['1920 · IN-ĐÔ-NÊ-XI-A','1930 · VIỆT NAM']},
  {k:'CHẶNG 03 · 1945 – 1975',h:'Về đích, rồi đi tiếp',p:'Năm 1945 tạo thời cơ cho nhiều cuộc cách mạng. Tuyên bố độc lập là bước ngoặt; bảo vệ chủ quyền vẫn là hành trình dài.',tags:['1945 · LÀN SÓNG ĐỘC LẬP','1975 · ĐÔNG DƯƠNG']},
  {k:'CÂU HỎI KẾT THÚC',h:'Điểm chung là gì?<br><em>Khác nhau ở đâu?</em>',p:'Hãy so sánh mục tiêu, lực lượng lãnh đạo và con đường đấu tranh ở ít nhất hai quốc gia Đông Nam Á.',tags:['THẢO LUẬN 2 PHÚT','TÌM DẪN CHỨNG']}
];
let slideIndex=0;const dialog=document.getElementById('presentDialog');
function renderSlide(){const s=slides[slideIndex];document.getElementById('slideNumber').textContent=`${String(slideIndex+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;document.getElementById('slideContent').innerHTML=`<span class="slide-kicker">${s.k}</span><h2>${s.h}</h2><p>${s.p}</p><div class="slide-dates">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div>`;document.getElementById('prevSlide').disabled=slideIndex===0;document.getElementById('nextSlide').disabled=slideIndex===slides.length-1}
function openPresentation(){slideIndex=0;renderSlide();dialog.showModal()}
['openPresent','heroPresent','teacherPresent'].forEach(id=>document.getElementById(id).addEventListener('click',openPresentation));
document.getElementById('closePresent').addEventListener('click',()=>dialog.close());document.getElementById('prevSlide').addEventListener('click',()=>{if(slideIndex>0){slideIndex--;renderSlide()}});document.getElementById('nextSlide').addEventListener('click',()=>{if(slideIndex<slides.length-1){slideIndex++;renderSlide()}});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&slideIndex<slides.length-1){slideIndex++;renderSlide()}if(e.key==='ArrowLeft'&&slideIndex>0){slideIndex--;renderSlide()}});document.getElementById('printSheet').addEventListener('click',()=>window.print());
