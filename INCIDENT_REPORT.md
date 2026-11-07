# Incident Report: Payment Commission Bug

## Bug Discovery
- Found using: `git bisect start`
- Problematic commit: 573e620
- Author: Igor

## Root Cause
The bug was introduced in the "Optimize commission calculation" commit where:
1. Commission calculation was changed to return rate instead of amount
2. Неправильный расчет в функции + неправильный ответ

## Fix Applied
- Reverted commit: 212d388
- Fix commit: 212d388
- Verification: Запуском тестирующей функции

## Stash Usage
- Stashed work: analytics.js + изменения в commisstions.js
- Stash command used: `git stash -u`
- Recovery successful: Yes

## Reflog Recovery
- Lost commit: e2664c8
- Recovery command: git reset --hard e2664c8
- Restored SHA: e2664c8

## Lessons Learned
Reflog - классная штука. Локальная БД по перемещению refs. bisect пока дается потяжелее
