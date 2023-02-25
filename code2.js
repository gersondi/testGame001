gdjs.room_322_32monitorCode = {};
gdjs.room_322_32monitorCode.GDtextBackObjects1= [];
gdjs.room_322_32monitorCode.GDtextBackObjects2= [];
gdjs.room_322_32monitorCode.GDtextBackObjects3= [];
gdjs.room_322_32monitorCode.GDtextBoxObjects1= [];
gdjs.room_322_32monitorCode.GDtextBoxObjects2= [];
gdjs.room_322_32monitorCode.GDtextBoxObjects3= [];
gdjs.room_322_32monitorCode.GDclickableObjects1= [];
gdjs.room_322_32monitorCode.GDclickableObjects2= [];
gdjs.room_322_32monitorCode.GDclickableObjects3= [];
gdjs.room_322_32monitorCode.GDitemObjects1= [];
gdjs.room_322_32monitorCode.GDitemObjects2= [];
gdjs.room_322_32monitorCode.GDitemObjects3= [];
gdjs.room_322_32monitorCode.GDRightObjects1= [];
gdjs.room_322_32monitorCode.GDRightObjects2= [];
gdjs.room_322_32monitorCode.GDRightObjects3= [];
gdjs.room_322_32monitorCode.GDLeftObjects1= [];
gdjs.room_322_32monitorCode.GDLeftObjects2= [];
gdjs.room_322_32monitorCode.GDLeftObjects3= [];
gdjs.room_322_32monitorCode.GDMonitorObjects1= [];
gdjs.room_322_32monitorCode.GDMonitorObjects2= [];
gdjs.room_322_32monitorCode.GDMonitorObjects3= [];
gdjs.room_322_32monitorCode.GDPasswordTextObjects1= [];
gdjs.room_322_32monitorCode.GDPasswordTextObjects2= [];
gdjs.room_322_32monitorCode.GDPasswordTextObjects3= [];
gdjs.room_322_32monitorCode.GDButtonObjects1= [];
gdjs.room_322_32monitorCode.GDButtonObjects2= [];
gdjs.room_322_32monitorCode.GDButtonObjects3= [];

gdjs.room_322_32monitorCode.conditionTrue_0 = {val:false};
gdjs.room_322_32monitorCode.condition0IsTrue_0 = {val:false};
gdjs.room_322_32monitorCode.condition1IsTrue_0 = {val:false};
gdjs.room_322_32monitorCode.condition2IsTrue_0 = {val:false};


gdjs.room_322_32monitorCode.mapOfGDgdjs_46room_95322_9532monitorCode_46GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room_322_32monitorCode.GDclickableObjects1});
gdjs.room_322_32monitorCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.room_322_32monitorCode.GDclickableObjects1, gdjs.room_322_32monitorCode.GDclickableObjects2);


gdjs.room_322_32monitorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room_322_32monitorCode.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room_322_32monitorCode.GDclickableObjects2[i].getVariableString(gdjs.room_322_32monitorCode.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "button" ) {
        gdjs.room_322_32monitorCode.condition0IsTrue_0.val = true;
        gdjs.room_322_32monitorCode.GDclickableObjects2[k] = gdjs.room_322_32monitorCode.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room_322_32monitorCode.GDclickableObjects2.length = k;}if (gdjs.room_322_32monitorCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI Layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PasswordText"), gdjs.room_322_32monitorCode.GDPasswordTextObjects2);

gdjs.room_322_32monitorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room_322_32monitorCode.GDPasswordTextObjects2.length;i<l;++i) {
    if ( gdjs.room_322_32monitorCode.GDPasswordTextObjects2[i].getString() == "1234" ) {
        gdjs.room_322_32monitorCode.condition0IsTrue_0.val = true;
        gdjs.room_322_32monitorCode.GDPasswordTextObjects2[k] = gdjs.room_322_32monitorCode.GDPasswordTextObjects2[i];
        ++k;
    }
}
gdjs.room_322_32monitorCode.GDPasswordTextObjects2.length = k;}if (gdjs.room_322_32monitorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textBox"), gdjs.room_322_32monitorCode.GDtextBoxObjects2);
{for(var i = 0, len = gdjs.room_322_32monitorCode.GDtextBoxObjects2.length ;i < len;++i) {
    gdjs.room_322_32monitorCode.GDtextBoxObjects2[i].setString("PC unlocked. Let's send out a malicious email");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PasswordText"), gdjs.room_322_32monitorCode.GDPasswordTextObjects1);

gdjs.room_322_32monitorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room_322_32monitorCode.GDPasswordTextObjects1.length;i<l;++i) {
    if ( !(gdjs.room_322_32monitorCode.GDPasswordTextObjects1[i].getString() == "1234") ) {
        gdjs.room_322_32monitorCode.condition0IsTrue_0.val = true;
        gdjs.room_322_32monitorCode.GDPasswordTextObjects1[k] = gdjs.room_322_32monitorCode.GDPasswordTextObjects1[i];
        ++k;
    }
}
gdjs.room_322_32monitorCode.GDPasswordTextObjects1.length = k;}if (gdjs.room_322_32monitorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textBox"), gdjs.room_322_32monitorCode.GDtextBoxObjects1);
{for(var i = 0, len = gdjs.room_322_32monitorCode.GDtextBoxObjects1.length ;i < len;++i) {
    gdjs.room_322_32monitorCode.GDtextBoxObjects1[i].setString("Incorrect Password");
}
}}

}


};gdjs.room_322_32monitorCode.mapOfGDgdjs_46room_95322_9532monitorCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.room_322_32monitorCode.GDLeftObjects1});
gdjs.room_322_32monitorCode.eventsList1 = function(runtimeScene) {

{


gdjs.room_322_32monitorCode.condition0IsTrue_0.val = false;
{
gdjs.room_322_32monitorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.room_322_32monitorCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UI_Layout", 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "click");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI Layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room_322_32monitorCode.GDclickableObjects1);

gdjs.room_322_32monitorCode.condition0IsTrue_0.val = false;
gdjs.room_322_32monitorCode.condition1IsTrue_0.val = false;
{
gdjs.room_322_32monitorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.room_322_32monitorCode.mapOfGDgdjs_46room_95322_9532monitorCode_46GDclickableObjects1Objects, runtimeScene, true, false);
}if ( gdjs.room_322_32monitorCode.condition0IsTrue_0.val ) {
{
gdjs.room_322_32monitorCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.room_322_32monitorCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.room_322_32monitorCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.room_322_32monitorCode.GDLeftObjects1);

gdjs.room_322_32monitorCode.condition0IsTrue_0.val = false;
gdjs.room_322_32monitorCode.condition1IsTrue_0.val = false;
{
gdjs.room_322_32monitorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.room_322_32monitorCode.mapOfGDgdjs_46room_95322_9532monitorCode_46GDLeftObjects1Objects, runtimeScene, true, false);
}if ( gdjs.room_322_32monitorCode.condition0IsTrue_0.val ) {
{
gdjs.room_322_32monitorCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.room_322_32monitorCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room 1", false);
}}

}


};

gdjs.room_322_32monitorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.room_322_32monitorCode.GDtextBackObjects1.length = 0;
gdjs.room_322_32monitorCode.GDtextBackObjects2.length = 0;
gdjs.room_322_32monitorCode.GDtextBackObjects3.length = 0;
gdjs.room_322_32monitorCode.GDtextBoxObjects1.length = 0;
gdjs.room_322_32monitorCode.GDtextBoxObjects2.length = 0;
gdjs.room_322_32monitorCode.GDtextBoxObjects3.length = 0;
gdjs.room_322_32monitorCode.GDclickableObjects1.length = 0;
gdjs.room_322_32monitorCode.GDclickableObjects2.length = 0;
gdjs.room_322_32monitorCode.GDclickableObjects3.length = 0;
gdjs.room_322_32monitorCode.GDitemObjects1.length = 0;
gdjs.room_322_32monitorCode.GDitemObjects2.length = 0;
gdjs.room_322_32monitorCode.GDitemObjects3.length = 0;
gdjs.room_322_32monitorCode.GDRightObjects1.length = 0;
gdjs.room_322_32monitorCode.GDRightObjects2.length = 0;
gdjs.room_322_32monitorCode.GDRightObjects3.length = 0;
gdjs.room_322_32monitorCode.GDLeftObjects1.length = 0;
gdjs.room_322_32monitorCode.GDLeftObjects2.length = 0;
gdjs.room_322_32monitorCode.GDLeftObjects3.length = 0;
gdjs.room_322_32monitorCode.GDMonitorObjects1.length = 0;
gdjs.room_322_32monitorCode.GDMonitorObjects2.length = 0;
gdjs.room_322_32monitorCode.GDMonitorObjects3.length = 0;
gdjs.room_322_32monitorCode.GDPasswordTextObjects1.length = 0;
gdjs.room_322_32monitorCode.GDPasswordTextObjects2.length = 0;
gdjs.room_322_32monitorCode.GDPasswordTextObjects3.length = 0;
gdjs.room_322_32monitorCode.GDButtonObjects1.length = 0;
gdjs.room_322_32monitorCode.GDButtonObjects2.length = 0;
gdjs.room_322_32monitorCode.GDButtonObjects3.length = 0;

gdjs.room_322_32monitorCode.eventsList1(runtimeScene);

return;

}

gdjs['room_322_32monitorCode'] = gdjs.room_322_32monitorCode;
