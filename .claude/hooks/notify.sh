#!/usr/bin/env bash
# Only notify if we're in an SSH-originated tmux session
# if ! tmux show-environment SSH_CONNECTION 2>/dev/null | grep -q SSH_CONNECTION=; then
#     exit 0
# fi
# EVENT_TYPE="${1:-unknown}"
# NTFY_URL="https://ntfy.sh/filiph-claude-code-remote-notifier"
# EVENT_DATA=$(cat)
# case "$EVENT_TYPE" in
#     question)
#         TITLE="🤔 Claude needs input"
#         PRIORITY="high"
#         MESSAGE=$(echo "$EVENT_DATA" | jq -r '.tool_input.question // .tool_input.questions[0].question // "Claude has a question for you"' 2>/dev/null)
#         ;;
#     stop)
	#         TITLE="✅ Claude finished"
	#         PRIORITY="default"
	#         MESSAGE="Task complete"
	#         ;;
#     error)
	#         TITLE="❌ Claude hit an error"
	#         PRIORITY="high"
	#         MESSAGE=$(echo "$EVENT_DATA" | jq -r '.error // "Something went wrong"' 2>/dev/null)
	#         ;;
#     *)
	#         TITLE="Claude Code"
	#         PRIORITY="default"
	#         MESSAGE="Event: $EVENT_TYPE"
	#         ;;
	# esac
	# PROJECT=$(basename "$PWD")
	# curl -s \
	#     -H "Authorization: Bearer $NTFY_TOKEN" \
	#     -H "Title: $TITLE" \
	#     -H "Priority: $PRIORITY" \
	#     -H "Tags: computer" \
	#     -d "[$PROJECT] $MESSAGE" \
	#     "$NTFY_URL" > /dev/null 2>&1
	#
