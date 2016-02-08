//
//  AddProjectViewController.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

class AddProjectViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let alert = UIAlertController.init(title: "Hello", message: "Jorgen is hungry!", preferredStyle: UIAlertControllerStyle.Alert)
        
        self.presentViewController(alert, animated: true, completion: nil)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
}
