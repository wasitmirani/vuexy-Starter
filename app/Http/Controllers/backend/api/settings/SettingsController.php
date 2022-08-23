<?php

namespace App\Http\Controllers\backend\api\settings;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingsController extends Controller
{
    //
    public function updateSettings(Request $request){

        $setting=Setting::where('user_id',1)->first();
        if(empty($setting)){
            $setting=Setting::create([
                'user_id'=>1,
                'active'=>1,
                'type'=>$request->type,
                'settings'=>$request->settings,
            ]);
        }
        else {
            $setting=  $setting->update([
                'user_id'=>1,
                'active'=>1,
                'type'=>$request->type,
                'settings'=>$request->settings,
            ]);
        }

        return   response()->json(['setting'=>$setting]);

    }
}
