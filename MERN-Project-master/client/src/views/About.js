import React from 'react';
import {
    CardText,
    CardTitle
} from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function About() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>
                        <CardTitle tag='h2'>نشأة الجمعية</CardTitle>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>تأسست الجمعية في أول كانون الثاني سنة 1925 بمبادرة من سيدات مدينة رام الله وعلى رأسهم السيدة بديعة سلامة وذلك لخدمة النساء والأطفال في منطقة رام الله .</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>
                        <CardTitle tag='h2'>رسالة الجمعية</CardTitle>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>جمعية النهضة النسائية هي جمعية خيرية تطوعية تأسست عام 1925  لتخدم النساء والأطفال في منطقة رام الله</CardText>
                        <CardText>من خلال مشاريعها التأهيلية والانسانية والاجتماعية لرفع مستوى المرأة من النواحي الثقافية والاجتماعية</CardText>
                        <CardText>والاقتصادية وعبر سنوات عملها تنوعت البرامج والمشاريع وفق احتياجات المجتمع المحلي وبناء على التغيرات السياسية والاجتماعية والاقتصادية في المنطقة.</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>
                        <CardTitle tag='h2'>أهداف الجمعية</CardTitle>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>تكمن نهضة كل مجتمع في الثبات والعطاء من أجل الوصول الى غايته المنشودة ولتحقيق ذلك نعمل على:</CardText>
                        <CardText>*رفع مستوى المرأة من النواحي الثقافية الاجتماعية المهنية .</CardText>
                        <CardText>*تقديم المساعدات المساعدات المادية والمعنوية لأفراد المجتمع المحلي والمحتاجين منهم.</CardText>
                        <CardText>*تطوير المشاريع الإنتاجية للوصول الى الاكتفاء الذاتي ,الفردي والجماعي.</CardText>
                        <CardText>*رعاية ذوي الاحتياجات الخاصة وتطوير برامج التربية الخاصة , وتوثيق الصلة ما بين المعوق والمجتمع المحلي .</CardText>
                        <CardText>وتحقيقا لهذه الأهداف عملت الجمعية على تفعيل البرامج والمشاريع التالية:</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>
                        <CardTitle tag='h2'>التأهيل والتدريب المهني للفتيات</CardTitle>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>تحرص الجمعية على الحفاظ على تراثنا الفلسطيني وتداوله من جيل إلى جيل , لذا اولته اهتماما خاصا في</CardText>
                        <CardText>التأهيل والتدريب المهني و اضافة الى مساهمتها بتشغيل الأيدي العاملة النسائية ليساهمن في رفع مستواهن الاقتصادي وذلك من خلال :</CardText>
                        <CardText>*دورات تدريب للفتيات في مجال الخياطة.</CardText>
                        <CardText>*تشغيل أيد عاملة في مجال التطريز الفلاحي من قرى ومخيمات رام الله عمل دورات تدريبية ومهنية للأمهات</CardText>
                        <CardText>والفتيات في مركز العلاجي للسمع والنطق ومركز النهضة للتأهيل التربوي والمهني.</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>
                        <CardTitle tag='h2'>مركز النهضة لتأهيل السمع و النطق والعلاج الوظيفي</CardTitle>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>تأسس المركز العلاجي للسمع والنطق عام  1995  . وتم تجهيزه بأحدث الأجهزة الطبية السمعية والكوادر </CardText>
                        <CardText>المتخصصة لتقديم الخدمات السمعية والنطقية اللازمة لكل الفئات العمرية.في المجالات التالية:</CardText>
                        <CardText>*الفحوصات السمعية بكافة انواعها وتأمين السماعات لمن يحتاجها .</CardText>
                        <CardText>* معالجة مشاكل النطق بكافة جوانبها معالجة الصعوبات التعليمية بصعوبة الكتابة والقراءة.</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>
                        <CardTitle tag='h2'>مركز النهضة للتأهيل التربوي والمهني </CardTitle>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>أنشئ المركز عام 1972   لتقديم خدماته للأطفال والبالغين من ذوي الاحتياجات الخاصة من برنامج التعليم </CardText>
                        <CardText>والتدريب والتأهيل المهني والمجتمعي للوصول معهم أقصى درجة من درجات الاستقلالية الاجتماعية والنفسية </CardText>
                        <CardText>والاقتصادية وذلك من خلال الأقسام التالية:</CardText>
                        <CardText>القسم الأكاديمي : والذي يضم الأطفال من سن 6-14  سنة موزعين على مجموعات متقاربة ومتجانسة من </CardText>
                        <CardText>حيث الإعاقة ويتم تعليمهم وتدريبهم على المهارات اللغوية والحسابية , والمهارات الاستقلالية والاجتماعية .</CardText>
                        <CardText>قسم التدريب ما قبل المهني : يضم القسم الطلاب والطالبات من 14-17 سنة حيث يتم التركيز على المهارات </CardText>
                        <CardText>المهنية الأساسية بشكل مكثف إضافة للمهارات الأكاديمية .</CardText>
                        <CardText>قسم التدريب المهني : يستقبل هذا القسم الطلاب والطالبات من عمر 17 عام وما فوق من ذوي الاعاقة العقلية </CardText>
                        <CardText>والصم ,الإعاقة الجسدية البسيطة وطلاب تسربوا من المدارس , حيث يتم تدريبهم على المهارات المهنية </CardText>
                        <CardText>المتنوعة منها,الخياطة,النسيج,التطريز الفلاحي,الزراعة,التدبير المنزلي والنجارة والتأقلم الاجتماعي والنفسي في العمل</CardText>
                        <CardText>قسم التوظيف : يشرف القسم على الطلاب الذين انهوا مرحلة التدريب المهني والمؤهلين للعمل في الورش</CardText>
                        <CardText>والمصانع المحلية , وتتم المتابعة في مكان العمل للتدرب على طبيعة المهارة التي سيقومون بها ز يتم التوظيف </CardText>
                        <CardText>اما في المشاغل المحلية أو مشغل الألعاب التربوية التابع للمركز , كل حسب امكانياته وقدراته وظروفه.</CardText>
                        <CardText>مشغل النهضة النسائية للألعاب التربوية : يعتبر هذا المشغل الأول من نوعه في مناطق السلطة الوطنية لإنتاج </CardText>
                        <CardText>الألعاب التربوية الخشبية و أثاث لرياض الأطفال والحضانات والمدارس ومراكز التربية الخاصة.</CardText>
                        <CardText>أنشئ المشغل عام 1987 ليكون مشغلا انتاجيا تابعا لجمعية النهضة النسائية لتحقيق الأهداف التالية:</CardText>
                        <CardText>*توفير فرص عمل لذوي الاحتياجات الخاصة للبالغين الذين تم تدريبهم وتأهيلهم.</CardText>
                        <CardText>*تزويد السوق المحلي باحتياجاته من الألعاب والأثاث المنتج محليا.</CardText>
                        <CardText>*توفير بعض المصاريف اليومية للمركز.</CardText>
                        <CardText>*الجمعية بصدد تطوير المشغل ببناء مبنى خاص ليتم استيعاب وتوظيف حوالي 30 عامل من المعوقين لزيادة القدرة الإنتاجية</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                    <Typography>
                        <CardTitle tag='h2'>برنامج وحدة العمل الخارجي</CardTitle>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText> *برنامج العمل في المدارس : بدأ العمل في هذا البرنامج عام 1991  في المدارس النظامية الحكومية ليقدم </CardText>
                        <CardText>خدماته للأطفال المعاقين عقليا والذين يعانون من صعوبات تعليمية في المرحلة الابتدائية الأساسية , يتم تحديد </CardText>
                        <CardText>الخطة الفردية بمشاركة الأهل ومعلم الصف والمرشد التربوي وذوي الاختصاص . البرنامج يقدم خدماته في </CardText>
                        <CardText>المدارس الحكومية في مدينة رام الله بالتعاون والتنسيق مع برنامج التأهيل المبني على المجتمع المحلي .</CardText>
                        <CardText>*برنامج العمل في القرى : بدء العمل في هذا البرنامج عام 2004 لتقديم الخدمات التأهيلية التربوية الاجتماعية </CardText>
                        <CardText>للمعاقين من فئة الشديد والشديد جدا في منطقة بيتونيا بالتعاون والتنسيق مع برنامج التأهيل المبني على المجتمع المحلي</CardText>
                        <CardText>مكتبة الالعاب التربوية من حق كل طفل أن يعيش طفولته وعلينا أن نوفر له حاجاته الضرورية الذهنية </CardText>
                        <CardText>والفسيولوجية .قامت الجمعية بإنشاء أول مكتبة عامة للألعاب التربوية عام لاستخدامها في برنامج الأطفال وتدريب الكوادر العاملة مع الأطفال.</CardText>
                        <CardText>المساعدات العينية والنقدية:تمنح هذه المساعدات للأفراد والأسر المحتاجة والتي تعاني من ضائقة مادية لسبب او لاخر بعد اجراء المسح الاجتماعي لها.</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                    <Typography>
                        <CardTitle tag='h2'>التطلعات المستقبلية</CardTitle>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>تسعى الجمعية من خلال تطوير وتوسيع أنشطتها وبرامجها الى </CardText>
                        <CardText>*بناء مشاغل القسم المهني والإنتاجي لزيادة القدرة الاستيعابية من ذوي الاحتياجات الخاصة للبالغين.</CardText>
                        <CardText>*تطوير برنامج التقييم والتشخيص المهني للبالغين.</CardText>
                        <CardText>*قسم خاص للمعاقين من ذوي الإعاقة الشديدة.</CardText>
                        <CardText>*إنشاء مختبر حاسوب لغوي لتطوير برامج التربية الخاصة.</CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                    <Typography>
                        <CardTitle tag='h2'>مصادر تمويل الجمعية</CardTitle>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CardText>تعتمد الجمعية كمؤسسة أهلية على التبرعات المحلية والخارجية لتدعيم وتطوير أنشطتها وخدماتها الاجتماعية </CardText>
                        <CardText>والإنسانية والتربوية في المجتمع المحلي </CardText>
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}
