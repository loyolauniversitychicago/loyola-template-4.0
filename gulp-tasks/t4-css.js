var gulp = require('gulp');
var replace = require('gulp-replace');

var config = {
	publicDir: './public',
	T4Dir: './T4',
};

gulp.task('t4_css', function() {
	//get styles.css in publicDir
	gulp.src(config.publicDir + '/css/styles.css')
	//social-icons
	.pipe(replace('("http://www.luc.edu/media/home/images/social-icons-logos-33-070714.png")', '("<t4 type="media" id="233455" formatter="path/*"/>")'))
	//background image
	.pipe(replace('("../images/bg-water.jpg")', '("<t4 type="media" id="372435" formatter="path/*"/>")'))
	//semi-transparent-pixel
	.pipe(replace('("<t4 type="media" id="406288" formatter="path/*"/>")', '("<t4 type="media" id="406288" formatter="path/*"/>")'))
	//ANTENNA FONTS
	//antenna regular
	.pipe(replace('("../fonts/antenna_regular/476def8b-6379-4133-9503-ca290c126397-4.svg")', '("<t4 type="media" id="309115" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_regular/476def8b-6379-4133-9503-ca290c126397-2.eot")', '("<t4 type="media" id="309117" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_regular/476def8b-6379-4133-9503-ca290c126397-3.woff")', '("<t4 type="media" id="309116" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_regular/476def8b-6379-4133-9503-ca290c126397-1.ttf")', '("<t4 type="media" id="309118" formatter="path/*"/>")'))
	//antenna bold
	.pipe(replace('("../fonts/antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-4.svg")', '("<t4 type="media" id="375084" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-2.eot")', '("<t4 type="media" id="375082" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-3.woff")', '("<t4 type="media" id="375083" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-1.ttf")', '("<t4 type="media" id="375081" formatter="path/*"/>")'))
	//antenna black
	.pipe(replace('("../fonts/antenna_black/6620971b-19a1-4157-9796-83671a1c7836-4.svg")', '("<t4 type="media" id="309109" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_black/6620971b-19a1-4157-9796-83671a1c7836-2.eot")', '("<t4 type="media" id="309111" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_black/6620971b-19a1-4157-9796-83671a1c7836-3.woff")', '("<t4 type="media" id="309110" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_black/6620971b-19a1-4157-9796-83671a1c7836-1.ttf")', '("<t4 type="media" id="309112" formatter="path/*"/>")'))
	//antenna light
	.pipe(replace('("../fonts/antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-4.svg")', '("<t4 type="media" id="375116" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-2.eot")', '("<t4 type="media" id="375114" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-3.woff")', '("<t4 type="media" id="375115" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-1.ttf")', '("<t4 type="media" id="375113" formatter="path/*"/>")'))
	//antenna thin
	.pipe(replace('("../fonts/antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-4.svg")', '("<t4 type="media" id="375089" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-2.eot")', '("<t4 type="media" id="375087" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-3.woff")', '("<t4 type="media" id="375088" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-1.ttf")', '("<t4 type="media" id="375086" formatter="path/*"/>")'))

	//ARNHEM FONT BEGINS//
	//arnhem fine
	.pipe(replace('("../fonts/arnhem_fine_normal/ArnhemFinePro-Normal.eot")', '("<t4 type="media" id="499743" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_fine_normal/ArnhemFinePro-Normal.woff")', '("<t4 type="media" id="499744" formatter="path/*"/>")'))
	//arnhem fine italic
	.pipe(replace('("../fonts/arnhem_fine_normal_italic/ArnhemFinePro-NormalItalic.eot")', '("<t4 type="media" id="499743" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_fine_normal_italic/ArnhemFinePro-NormalItalic.woff")', '("<t4 type="media" id="499744" formatter="path/*"/>")'))
	//arnhem fine semibold
	.pipe(replace('("../fonts/arnhem_fine_semibold/ArnhemFine-SemiBold.eot")', '("<t4 type="media" id="499747" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_fine_semibold/ArnhemFine-SemiBold.woff")', '("<t4 type="media" id="499748" formatter="path/*"/>")'))
	//arnhem fine semibold italic
	.pipe(replace('("../fonts/arnhem_fine_semibold_italic/ArnhemFineSemiBoldItalic.eot")', '("<t4 type="media" id="499749" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_fine_semibold_italic/ArnhemFineSemiBoldItalic.woff")', '("<t4 type="media" id="499750" formatter="path/*"/>")'))
	//arnhem blond
	.pipe(replace('("../fonts/arnhem_blond/ArnhemPro-Blond.eot")', '("<t4 type="media" id="499734" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_blond/ArnhemPro-Blond.woff")', '("<t4 type="media" id="499731" formatter="path/*"/>")'))
	//arnhem blond italic
	.pipe(replace('("../fonts/arnhem_blond/ArnhemPro-BlondItalic.eot")', '("<t4 type="media" id="499732" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_blond/ArnhemPro-BlondItalicwoff")', '("<t4 type="media" id="499733" formatter="path/*"/>")'))
	//arnhem bold
	.pipe(replace('("../fonts/arnhem_bold/ArnhemPro-Bold.eot")', '("<t4 type="media" id="499735" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_bold/ArnhemPro-Bold.woff")', '("<t4 type="media" id="499736" formatter="path/*"/>")'))
	//arnhem bold italic
	.pipe(replace('("../fonts/arnhem_bold_italic/ArnhemPro-BoldItalic.eot")', '("<t4 type="media" id="499737" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_bold_italic/ArnhemPro-BoldItalic.woff")', '("<t4 type="media" id="499738" formatter="path/*"/>")'))
	//arnhem black
	.pipe(replace('("../fonts/arnhem_black/ArnhemPro-Black.eot")', '("<t4 type="media" id="499727" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_black/ArnhemPro-Black.woff")', '("<t4 type="media" id="499728" formatter="path/*"/>")'))
	//arnhem black italic
	.pipe(replace('("../fonts/arnhem_black_italic/ArnhemPro-BlackItalic.eot")', '("<t4 type="media" id="499727" formatter="path/*"/>")'))
	.pipe(replace('("../fonts/arnhem_black_italic/ArnhemPro-BlackItalic.woff")', '("<t4 type="media" id="499728" formatter="path/*"/>")'))
	//send to /css/styles.css in T4Dir
	.pipe(gulp.dest(config.T4Dir + '/css'));
});
