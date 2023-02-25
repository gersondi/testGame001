gdjs.room_321Code = {};
gdjs.room_321Code.GDtextBackObjects1= [];
gdjs.room_321Code.GDtextBackObjects2= [];
gdjs.room_321Code.GDtextBackObjects3= [];
gdjs.room_321Code.GDtextBoxObjects1= [];
gdjs.room_321Code.GDtextBoxObjects2= [];
gdjs.room_321Code.GDtextBoxObjects3= [];
gdjs.room_321Code.GDclickableObjects1= [];
gdjs.room_321Code.GDclickableObjects2= [];
gdjs.room_321Code.GDclickableObjects3= [];
gdjs.room_321Code.GDitemObjects1= [];
gdjs.room_321Code.GDitemObjects2= [];
gdjs.room_321Code.GDitemObjects3= [];
gdjs.room_321Code.GDRightObjects1= [];
gdjs.room_321Code.GDRightObjects2= [];
gdjs.room_321Code.GDRightObjects3= [];
gdjs.room_321Code.GDLeftObjects1= [];
gdjs.room_321Code.GDLeftObjects2= [];
gdjs.room_321Code.GDLeftObjects3= [];
gdjs.room_321Code.GDbackgroundObjects1= [];
gdjs.room_321Code.GDbackgroundObjects2= [];
gdjs.room_321Code.GDbackgroundObjects3= [];

gdjs.room_321Code.conditionTrue_0 = {val:false};
gdjs.room_321Code.condition0IsTrue_0 = {val:false};
gdjs.room_321Code.condition1IsTrue_0 = {val:false};
gdjs.room_321Code.condition2IsTrue_0 = {val:false};


gdjs.room_321Code.mapOfGDgdjs_46room_95321Code_46GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room_321Code.GDclickableObjects1});
gdjs.room_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.room_321Code.GDclickableObjects1, gdjs.room_321Code.GDclickableObjects2);


gdjs.room_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room_321Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room_321Code.GDclickableObjects2[i].getVariableString(gdjs.room_321Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "door" ) {
        gdjs.room_321Code.condition0IsTrue_0.val = true;
        gdjs.room_321Code.GDclickableObjects2[k] = gdjs.room_321Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room_321Code.GDclickableObjects2.length = k;}if (gdjs.room_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textBox"), gdjs.room_321Code.GDtextBoxObjects2);
{for(var i = 0, len = gdjs.room_321Code.GDtextBoxObjects2.length ;i < len;++i) {
    gdjs.room_321Code.GDtextBoxObjects2[i].setString("Door is locked. Find the key");
}
}}

}


{

gdjs.copyArray(gdjs.room_321Code.GDclickableObjects1, gdjs.room_321Code.GDclickableObjects2);


gdjs.room_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room_321Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room_321Code.GDclickableObjects2[i].getVariableString(gdjs.room_321Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "monitor" ) {
        gdjs.room_321Code.condition0IsTrue_0.val = true;
        gdjs.room_321Code.GDclickableObjects2[k] = gdjs.room_321Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room_321Code.GDclickableObjects2.length = k;}if (gdjs.room_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textBox"), gdjs.room_321Code.GDtextBoxObjects2);
{for(var i = 0, len = gdjs.room_321Code.GDtextBoxObjects2.length ;i < len;++i) {
    gdjs.room_321Code.GDtextBoxObjects2[i].setString("Oh! Monitor is locked. Find PIN to unlock it");
}
}}

}


{

/* Reuse gdjs.room_321Code.GDclickableObjects1 */

gdjs.room_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room_321Code.GDclickableObjects1.length;i<l;++i) {
    if ( gdjs.room_321Code.GDclickableObjects1[i].getVariableString(gdjs.room_321Code.GDclickableObjects1[i].getVariables().getFromIndex(0)) == "bin" ) {
        gdjs.room_321Code.condition0IsTrue_0.val = true;
        gdjs.room_321Code.GDclickableObjects1[k] = gdjs.room_321Code.GDclickableObjects1[i];
        ++k;
    }
}
gdjs.room_321Code.GDclickableObjects1.length = k;}if (gdjs.room_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.room_321Code.GDitemObjects1);
gdjs.copyArray(runtimeScene.getObjects("textBox"), gdjs.room_321Code.GDtextBoxObjects1);
{for(var i = 0, len = gdjs.room_321Code.GDtextBoxObjects1.length ;i < len;++i) {
    gdjs.room_321Code.GDtextBoxObjects1[i].setString("Something interesting. There is a scribbled note with numbers: 1234. Is it the PIN? Let's find out. Goto Next Screen");
}
}{for(var i = 0, len = gdjs.room_321Code.GDitemObjects1.length ;i < len;++i) {
    gdjs.room_321Code.GDitemObjects1[i].setAnimation(1);
}
}}

}


};gdjs.room_321Code.mapOfGDgdjs_46room_95321Code_46GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room_321Code.GDclickableObjects1});
gdjs.room_321Code.mapOfGDgdjs_46room_95321Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.room_321Code.GDRightObjects1});
gdjs.room_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.room_321Code.condition0IsTrue_0.val = false;
{
gdjs.room_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.room_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UI_Layout", 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "click");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI Layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room_321Code.GDclickableObjects1);

gdjs.room_321Code.condition0IsTrue_0.val = false;
gdjs.room_321Code.condition1IsTrue_0.val = false;
{
gdjs.room_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.room_321Code.mapOfGDgdjs_46room_95321Code_46GDclickableObjects1Objects, runtimeScene, true, false);
}if ( gdjs.room_321Code.condition0IsTrue_0.val ) {
{
gdjs.room_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.room_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI Layer");
}
{ //Subevents
gdjs.room_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room_321Code.GDclickableObjects1);

gdjs.room_321Code.condition0IsTrue_0.val = false;
gdjs.room_321Code.condition1IsTrue_0.val = false;
{
gdjs.room_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.room_321Code.condition0IsTrue_0.val ) {
{
gdjs.room_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.room_321Code.mapOfGDgdjs_46room_95321Code_46GDclickableObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.room_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.room_321Code.GDitemObjects1);
{for(var i = 0, len = gdjs.room_321Code.GDitemObjects1.length ;i < len;++i) {
    gdjs.room_321Code.GDitemObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI Layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.room_321Code.GDRightObjects1);

gdjs.room_321Code.condition0IsTrue_0.val = false;
gdjs.room_321Code.condition1IsTrue_0.val = false;
{
gdjs.room_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.room_321Code.mapOfGDgdjs_46room_95321Code_46GDRightObjects1Objects, runtimeScene, true, false);
}if ( gdjs.room_321Code.condition0IsTrue_0.val ) {
{
gdjs.room_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.room_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room 2 monitor", false);
}}

}


};

gdjs.room_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.room_321Code.GDtextBackObjects1.length = 0;
gdjs.room_321Code.GDtextBackObjects2.length = 0;
gdjs.room_321Code.GDtextBackObjects3.length = 0;
gdjs.room_321Code.GDtextBoxObjects1.length = 0;
gdjs.room_321Code.GDtextBoxObjects2.length = 0;
gdjs.room_321Code.GDtextBoxObjects3.length = 0;
gdjs.room_321Code.GDclickableObjects1.length = 0;
gdjs.room_321Code.GDclickableObjects2.length = 0;
gdjs.room_321Code.GDclickableObjects3.length = 0;
gdjs.room_321Code.GDitemObjects1.length = 0;
gdjs.room_321Code.GDitemObjects2.length = 0;
gdjs.room_321Code.GDitemObjects3.length = 0;
gdjs.room_321Code.GDRightObjects1.length = 0;
gdjs.room_321Code.GDRightObjects2.length = 0;
gdjs.room_321Code.GDRightObjects3.length = 0;
gdjs.room_321Code.GDLeftObjects1.length = 0;
gdjs.room_321Code.GDLeftObjects2.length = 0;
gdjs.room_321Code.GDLeftObjects3.length = 0;
gdjs.room_321Code.GDbackgroundObjects1.length = 0;
gdjs.room_321Code.GDbackgroundObjects2.length = 0;
gdjs.room_321Code.GDbackgroundObjects3.length = 0;

gdjs.room_321Code.eventsList1(runtimeScene);

return;

}

gdjs['room_321Code'] = gdjs.room_321Code;
