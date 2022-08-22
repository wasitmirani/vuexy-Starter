<?php

namespace App\helpers;

class HelperComponent
{


    public static function SideBar()
    {
        $prefix = "portal";
        return [
            [
                "heading" => "Analytics",
                "heading_can" => "analytics-heading-view",
            ],
            setSingleLink("Dashboard", "home", "dashboard-view", "/dashboard"),

            [
                "heading" => "Management",
                "heading_can" => "management-heading-view",

            ],
            [

                "title" => 'User Management',
                'can' => 'user-management-dropdown',
                "icon" => "users",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Users",
                        null,
                        "users-list-view",
                        "/users",
                    ),
                    setSubMenu(
                        "Roles",
                        null,
                        "roles-list-view",
                        "/roles",
                    ),
                    setSubMenu(
                        "Permissions",
                        null,
                        "permissions-list-view",
                        "/permissions",
                    ),

                ]

            ],

            [
                "heading" => "Apps & Pages",
                "heading_can" => "apps-heading-view",

            ],
            [

                "title" => 'Appearance',
                'can' => 'appearance-management-dropdown',
                "icon" => "link",
                'type' => 'multi',
                "sub_menu" => [


                    setSubMenu(
                        "Package",
                        null,
                        "packages-list-view",
                        "/packages",
                    ),


                ],




            ],

            [
                "heading" => "Tools",
                "heading_can" => "tools-heading-view",

            ],



            setSingleLink("Settings", "settings", "settings-view", "/settings"),




        ];
    }
}
