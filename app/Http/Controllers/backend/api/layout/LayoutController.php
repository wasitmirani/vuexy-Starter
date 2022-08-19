<?php

namespace App\Http\Controllers\backend\api\layout;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function getSideBarMenu(Request $request){
        // Sidebar Menu helper funtction load menu for backend
        $sidebar_menu=sideBarMenu();
        $sidebar_menu=collect($sidebar_menu)->values();
        return response()->json($sidebar_menu);
    }
    //
}
