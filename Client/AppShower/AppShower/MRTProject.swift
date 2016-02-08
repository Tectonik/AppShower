//
//  MRTProject.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

enum projectStatus {
    case A
    case B
    case C
    case D
}


class MRTProject: NSObject {
    
    let projectId: String?
    let startedAt: NSDate?
    let authors: [MRTUser]?
    let status: projectStatus?
    let estimatedBudget: String?
    let potentialIssues: String?
    let flexibility: String?
    let strategy: String?
    let mission: String?
    let goal: String?
    let name: String?
    
    init() {
        code
    }
}
