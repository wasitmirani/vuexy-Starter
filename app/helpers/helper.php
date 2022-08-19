
<?php


use Illuminate\Support\Str;

use App\helpers\HelperComponent;





function sideBarMenu(){
    return HelperComponent::sideBar();
}


function setSingleLink($title,$icon,$v_can=null,$v_route=null, $prefix="/portal"){
    return [
        "title"=>$title,
        'type'=> 'single_link',
        "icon"=>$icon,
        "can"=>$v_can,
        "route"=>$prefix.$v_route,
    ];
}
function singleImgUpload($request, $path)
{
    if ($request->hasfile('image')) {
        $name=Str::random(20);
        // dd($name);
        $name = $name . "-" . time() . '.' . $request->image->extension();
        $request->image->move(public_path($path), $name);
    } else
        $name = "";
    return $name;
}


function setSubMenu($title,$icon,$v_can=null,$v_route=null,$prefix="/portal"){
    return [
        "title"=>$title,
        "icon"=>$icon,
        "can"=>$v_can,
        "route"=>$prefix.$v_route,
    ];
 }





