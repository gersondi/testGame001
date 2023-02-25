gdjs.menuCode = {};
gdjs.menuCode.GDtextBackObjects1= [];
gdjs.menuCode.GDtextBackObjects2= [];
gdjs.menuCode.GDtextBoxObjects1= [];
gdjs.menuCode.GDtextBoxObjects2= [];
gdjs.menuCode.GDclickableObjects1= [];
gdjs.menuCode.GDclickableObjects2= [];
gdjs.menuCode.GDitemObjects1= [];
gdjs.menuCode.GDitemObjects2= [];
gdjs.menuCode.GDRightObjects1= [];
gdjs.menuCode.GDRightObjects2= [];
gdjs.menuCode.GDLeftObjects1= [];
gdjs.menuCode.GDLeftObjects2= [];
gdjs.menuCode.GDroomObjects1= [];
gdjs.menuCode.GDroomObjects2= [];
gdjs.menuCode.GDGameTitleObjects1= [];
gdjs.menuCode.GDGameTitleObjects2= [];
gdjs.menuCode.GDloadObjects1= [];
gdjs.menuCode.GDloadObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDloadObjects1Objects = Hashtable.newFrom({"load": gdjs.menuCode.GDloadObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room 1", false);
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDloadObjects1Objects = Hashtable.newFrom({"load": gdjs.menuCode.GDloadObjects1});
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("load"), gdjs.menuCode.GDloadObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDloadObjects1Objects, runtimeScene, true, false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDloadObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDloadObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDloadObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("load"), gdjs.menuCode.GDloadObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDloadObjects1Objects, runtimeScene, true, true);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDloadObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDloadObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDloadObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDtextBackObjects1.length = 0;
gdjs.menuCode.GDtextBackObjects2.length = 0;
gdjs.menuCode.GDtextBoxObjects1.length = 0;
gdjs.menuCode.GDtextBoxObjects2.length = 0;
gdjs.menuCode.GDclickableObjects1.length = 0;
gdjs.menuCode.GDclickableObjects2.length = 0;
gdjs.menuCode.GDitemObjects1.length = 0;
gdjs.menuCode.GDitemObjects2.length = 0;
gdjs.menuCode.GDRightObjects1.length = 0;
gdjs.menuCode.GDRightObjects2.length = 0;
gdjs.menuCode.GDLeftObjects1.length = 0;
gdjs.menuCode.GDLeftObjects2.length = 0;
gdjs.menuCode.GDroomObjects1.length = 0;
gdjs.menuCode.GDroomObjects2.length = 0;
gdjs.menuCode.GDGameTitleObjects1.length = 0;
gdjs.menuCode.GDGameTitleObjects2.length = 0;
gdjs.menuCode.GDloadObjects1.length = 0;
gdjs.menuCode.GDloadObjects2.length = 0;

gdjs.menuCode.eventsList1(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
