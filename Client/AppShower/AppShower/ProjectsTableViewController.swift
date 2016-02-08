//
//  ProjectsTableViewController.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

class ProjectsTableViewController: UITableViewController {
    
    var allProjects: [MRTProject] = [];
    let appDelegate = UIApplication.sharedApplication().delegate as! AppDelegate
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.title="All projects"
        
        let addProjectBarButton = UIBarButtonItem.init(barButtonSystemItem: UIBarButtonSystemItem.Add, target: self, action: "showAdd")
        self.navigationItem.rightBarButtonItem = addProjectBarButton
        
        let searchProjectBarButton = UIBarButtonItem.init(barButtonSystemItem: UIBarButtonSystemItem.Search, target: self, action: "showSearch")
        self.navigationItem.leftBarButtonItem = searchProjectBarButton
        
        self.allProjects = appDelegate.data.allPojects!;
        
        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false
        
        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        // self.navigationItem.rightBarButtonItem = self.editButtonItem()
    }
    
    func showAdd() {
        let storyboardId = "AddProjectScene"
        
        let addProjectVc = self.storyboard?.instantiateViewControllerWithIdentifier(storyboardId) as!
            AddProjectViewController
        
        addProjectVc.title = "Add new project"
            
        self.navigationController?.pushViewController(addProjectVc, animated: true)
    }
    
    func showSearch() {
        let storyboardId = "SearchProjectScene"
        
        let searchProjectVc = self.storyboard?.instantiateViewControllerWithIdentifier(storyboardId) as!
        SearchProjectViewController
        
        searchProjectVc.title = "Find a project"
        
        self.navigationController?.pushViewController(searchProjectVc, animated: true)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 1
    }
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.allProjects.count
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let projectCellIdentifier = "projectCell";
        
        var cell = tableView.dequeueReusableCellWithIdentifier(projectCellIdentifier)
//        self.tableView.registerClass(cell.class, forHeaderFooterViewReuseIdentifier: projectCell)
        
        if (cell == nil) {
            cell = UITableViewCell.init(style: UITableViewCellStyle.Default, reuseIdentifier: projectCellIdentifier)
        }
        
        cell!.textLabel?.text = self.allProjects[indexPath.row].name
        
        return cell!
    }
    
    override func tableView(tableView: UITableView, didDeselectRowAtIndexPath indexPath: NSIndexPath) {
        let storyboardId = "ProjectDetailsScene"
        
        let detailsVc = self.storyboard?.instantiateViewControllerWithIdentifier(storyboardId) as! ProjectDetailsViewController
        
        detailsVc.title=self.allProjects[indexPath.row].name
        
        self.navigationController?.pushViewController(detailsVc, animated: true)
    }
    
    /*
    // Override to support conditional editing of the table view.
    override func tableView(tableView: UITableView, canEditRowAtIndexPath indexPath: NSIndexPath) -> Bool {
    // Return false if you do not want the specified item to be editable.
    return true
    }
    */
    
    /*
    // Override to support editing the table view.
    override func tableView(tableView: UITableView, commitEditingStyle editingStyle: UITableViewCellEditingStyle, forRowAtIndexPath indexPath: NSIndexPath) {
    if editingStyle == .Delete {
    // Delete the row from the data source
    tableView.deleteRowsAtIndexPaths([indexPath], withRowAnimation: .Fade)
    } else if editingStyle == .Insert {
    // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }
    }
    */
    
    /*
    // Override to support rearranging the table view.
    override func tableView(tableView: UITableView, moveRowAtIndexPath fromIndexPath: NSIndexPath, toIndexPath: NSIndexPath) {
    
    }
    */
    
    /*
    // Override to support conditional rearranging of the table view.
    override func tableView(tableView: UITableView, canMoveRowAtIndexPath indexPath: NSIndexPath) -> Bool {
    // Return false if you do not want the item to be re-orderable.
    return true
    }
    */
    
    /*
    // MARK: - Navigation
    
    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
    // Get the new view controller using segue.destinationViewController.
    // Pass the selected object to the new view controller.
    }
    */
    
}
