﻿#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/AILib.jsx"//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/AILib.jsx" try  {	if (app.documents.length > 0 ) 	{		doc = activeDocument;	createBuilderDialog();	} else throw new Error('Нет открытых документов!');	}catch(e) {	alert( e.message, "Script Alert", true);}function createBuilderDialog()
{	 var dlg = new Window('dialog', 'TEST-Scripts', undefined, {closeButton:true}); //{closeButton:false}	 dlg.center();	 dlg.alignChildren = "left";	 dlg.orientation = "column";							 cifra = dlg.add('panel', undefined, '');		 cifra.alignChildren = "left";		 cifra.margins.top = 10;			c_3D_SO = cifra.add('radiobutton', [0, 0, 175, 13], '  Cifra_3D_SO');			//c_3D = cifra.add('radiobutton', [0, 0, 175, 13], '  Cifra_3D');			//o_3D = cifra.add('radiobutton', [0, 0, 175, 13], '  OFSET_3D');			//o_3D_1 = cifra.add('radiobutton', [0, 0, 175, 13], '  OFSET_3D');			o_3D_1_SO = cifra.add('radiobutton', [0, 0, 175, 13], '  OFSET_3D_SO');			//o_DB = cifra.add('radiobutton', [0, 0, 175, 13], '  OFSET_BD');			//st = cifra.add('statictext', undefined, '----------');			oOut_3D = cifra.add('radiobutton', [0, 0, 175, 13], '  OUT_Ofset');			//SetMrk_3D = cifra.add('radiobutton', [0, 0, 175, 13], '  SET_MARKS');			Exp_IMG = cifra.add('radiobutton', [0, 0, 175, 13], '  Raster_Image_To_Link');			//MC_SCD = cifra.add('radiobutton', [0, 0, 175, 13], '  Cifra_Tver_AUTO');			Angle = cifra.add('radiobutton', [0, 0, 175, 13], '  Angle_measurement');			Exp_JPG = cifra.add('radiobutton', [0, 0, 175, 13], '  Export_to_JPEG_v.3.3');			Exp_JPG2 = cifra.add('radiobutton', [0, 0, 175, 13], '  Export_to_JPEG_v.3.4');			Sizer = cifra.add('radiobutton', [0, 0, 175, 13], '  Sizing');			Chk24 = cifra.add('radiobutton', [0, 0, 175, 13], '  CHECK_v2.4');			AssProj = cifra.add('radiobutton', [0, 0, 175, 13], '  AssemblyProject');			//CfrHP = cifra.add('radiobutton', [0, 0, 175, 13], '  CIFRA_HP');			//CfrTgl = cifra.add('radiobutton', [0, 0, 175, 13], '  CIFRA_Tigel');			CfrTglKroy = cifra.add('radiobutton', [0, 0, 175, 13], '  CIFRA_Tigel_Kroy');			c_3D_SO.value = true;			 		RunA = dlg.add('button', undefined, 'Выполнить');		RunA.alignment = ['right', 'right'];			 		RunA.onClick = function ()		{			dlg.close();						//if (c_3D.value)			//{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/Cifra_3D.jsx"				//#include "/Users/apple3/Documents/Adobe Scripts/JSX/SCRIPTS/Cifra_3D.jsx";			//}						if (c_3D_SO.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/Cifra_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/Cifra_3D_SO.jsx";			}					//if (o_3D_1.value)			//{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				//#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/OFSET_3D_1.jsx";			//}						if (o_3D_1_SO.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/OFSET_3D_SO.jsx";			}			/* 			if (o_DB.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/OFSET_BD.jsx";			} */						//if (o_3D.value)			//{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				//#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/OFSET_3D.jsx";			//}						if (oOut_3D.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/OUT_Ofset.jsx";			}			/* 			if (SetMrk_3D.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx" 				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/SET_MARKS.jsx";			} */			/* 			if (MC_SCD.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/Cifra_Tver_AUTO.jsx";			} */						if (Exp_IMG.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/ImgEmb_toLinkPSD.jsx";			}			//Angle_measurement			if (Angle.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/Angle_measurement.jsx";			}						if (Exp_JPG.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/Export_to_JPEG_v.3.3.jsx";			}						if (Exp_JPG2.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/Export_to_JPEG_v.3.4.jsx";			}						if (Sizer.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/Dimension_CC.jsx"				//#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/Export_to_JPEG_v.3.3.jsx";			}						if (Chk24.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/CHECK_v2.4.jsx";			}						if (AssProj.value)			{				//#include  "C:/Users/Андрей/Desktop/SCRIPTS2/OFSET_3D.jsx"				#include "H:/3D display/Adobe Scripts/JSX/SCRIPTS/AssemblyProject.jsx";			}			/* 			if (CfrHP.value)			{				//#include  "H:/Documents/SCD/scripts_28.02.2017/cifra_hp/Cifra_HP.jsx"				#include "C:/Users/Андрей/Desktop/SCD/LastActualScripts/Cifra_HP.jsx";			}						if (CfrTgl.value)			{				//#include  "H:/Documents/SCD/scripts_28.02.2017/cifra_hp/Cifra_HP.jsx"				#include "C:/Users/Андрей/Desktop/SCD/LastActualScripts/Cifra_tigel_ex.jsx";			}						if (CfrTglKroy.value)			{				//#include  "H:/Documents/SCD/scripts_28.02.2017/cifra_hp/Cifra_HP.jsx"				#include "C:/Users/Андрей/Desktop/SCD/LastActualScripts/Cifra_tigel_kroy_ex.jsx";			} */		}			 	dlg.show();}