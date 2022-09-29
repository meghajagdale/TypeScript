package com.awesometsproject.device;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;



public class DeviceModule extends ReactContextBaseJavaModule {
   //constructor
   public DeviceModule(ReactApplicationContext reactContext) {
       super(reactContext);
   }
   //Mandatory function getName that specifies the module name
   @Override
   public String getName() {
       return "Device";
   }
   //Custom function that we are going to export to JS
   @ReactMethod
   public void getDeviceName(Callback cb) {
       try{
        //    WritableMap object = new WritableNativeMap();
        //    object.putString("Model", android.os.Build.MODEL);
        //    object.putString("Brand",android.os.Build.BRAND);
           cb.invoke(null, android.os.Build.BRAND);
       }catch (Exception e){
           cb.invoke(e.toString(), null);
       }
   }
}